import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { StationStatus } from './types';
import type { Line, RunningLine, RunningLineStation } from './types';

interface RunningState {
  current: RunningLineStation;
  next: RunningLineStation;
}

interface InitLineOptions {
  /**
   * 始发站Id，默认为第一站，与上下行有关
   */
  from?: RunningLineStation['id'];
  /**
   * 终点站Id，默认为最后一站，与上下行有关
   */
  to?: RunningLineStation['id'];
}

@Injectable()
export class RunningLineService {
  private running = new BehaviorSubject<RunningState | null>(null);
  private runningLine!: RunningLine;

  constructor() {}

  get runningState$(): Observable<RunningState> {
    return this.running.asObservable() as unknown as Observable<RunningState>;
  }

  init(
    line: Line,
    /**
     * 初始化时可传的参数，如控制小交路等
     */
    options: InitLineOptions = {}
  ): Readonly<RunningLine> {
    const runningLine = { ...line } as Partial<RunningLine>;

    runningLine.stations = line.stations.map<RunningLineStation>((station) => ({
      ...station,
      status: StationStatus.OnTheWay,
    }));

    if (line.direction === 'down') {
      runningLine.stations = runningLine.stations.reverse();
    }
    runningLine.from = runningLine.stations[0];
    if (options.from) {
      const fromIdx = runningLine.stations.findIndex(
        (x) => x.id === options.from
      );
      if (fromIdx !== -1) {
        runningLine.stations
          .slice(0, fromIdx)
          .forEach((x) => (x.status = StationStatus.NotInService));
        runningLine.from = runningLine.stations[fromIdx];
      }
    }

    runningLine.to = runningLine.stations.at(-1);
    if (options.to) {
      const toIdx = runningLine.stations.findIndex((x) => x.id === options.to);
      if (toIdx) {
        runningLine.stations
          .slice(toIdx + 1)
          .forEach((x) => (x.status = StationStatus.NotInService));
        runningLine.to = runningLine.stations[toIdx];
      }
    }

    this.runningLine = runningLine as RunningLine;
    this.setStartStation();

    return this.runningLine;
  }

  private getNextStation(index: number): { index: number; station: RunningLineStation; } | null {
    const { stations } = this.runningLine;

    let nextIdx = index + 1;
    if (nextIdx === stations.length) {
      return null;
    }
    const nextStation = stations[nextIdx];
    if (nextStation.disabled) {
      return this.getNextStation(nextIdx);
    }

    return { index: nextIdx, station: nextStation };
  }

  setStartStation() {
    const { from, stations } = this.runningLine;

    for (let i = 0; i < stations.length; i++) {
      const station = stations[i];
      if (from === station) {
        from.status = StationStatus.ArrivingSoon;
        const nextStation = this.getNextStation(i);
        this.running.next({
          current: Object.assign(from),
          next: nextStation ? Object.assign(nextStation) : null,
        });

        break;
      }
    }
  }

  next() {
    const { stations } = this.runningLine;
    const nextStationIdx = stations.findIndex(
      (station) =>
        station.status === StationStatus.ArrivingSoon ||
        station.status === StationStatus.Arrived
    );
    if (nextStationIdx === -1) {
      return;
    }
    const nextStation = stations[nextStationIdx];
    const { index, station: next2Station } = this.getNextStation(nextStationIdx) ?? {};

    switch (nextStation.status) {
      case StationStatus.ArrivingSoon:
        nextStation.status = StationStatus.Arrived;
        break;
      case StationStatus.Arrived:
        if (nextStation.id === this.runningLine.to.id) {
          return;
        }
        nextStation.status = StationStatus.Past;
        if (next2Station) {
          if (typeof index === 'number' && index > nextStationIdx + 1) {
            // 中间暂缓开通的车站，在运行时设置状态为Past
            for (let i = nextStationIdx + 1; i < index; i++) {
              stations[i].status = StationStatus.Past;
            }
          }
          next2Station.status = StationStatus.ArrivingSoon;
        }
        break;
    }

    this.running.next({
      current: Object.assign(nextStation),
      next: next2Station ? Object.assign(next2Station) : null,
    });
  }
}
