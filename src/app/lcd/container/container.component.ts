import { Component, HostBinding } from '@angular/core';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { type Line, StationStatus } from '../types';
import { Line2 } from '../lineDefs/';
import { RunningLineService } from '../running-line.service';

@Component({
  selector: 'lcd-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
  providers: [RunningLineService],
})
export class ContainerComponent {
  line: Line = Line2;

  runningLine!: ReturnType<RunningLineService['init']>;

  playlist$: Observable<string[]>;

  @HostBinding('style.--line-color')
  get lineColor() {
    return this.line?.color;
  }

  constructor(private runningLineService: RunningLineService) {
    this.runningLine = this.runningLineService.init(this.line);

    this.playlist$ = this.runningLineService.runningState$.pipe(
      filter((x) => x != null),
      map((state) => {
        const { current, next } = state;
        let station;
        if (current.status !== StationStatus.Past) {
          station = current;
        } else {
          station = next;
        }

        switch (station.status) {
          case StationStatus.ArrivingSoon:
          case StationStatus.Arrived:
            return station.voices?.[station.status] ?? {};
          default:
            return {};
        }
      }),
      map((voices) => {
        if (Object.keys(voices).length === 0) {
          return [];
        }
        const { ch, en } = voices;
        const playlist: string[] = [];
        for (let i = 0; i < ch.length; i++) {
          const chItem = ch[i];
          const enItem = en[i];
          if (chItem) {
            playlist.push(environment.VoicesPrefix.ch + chItem);
          }
          if (enItem) {
            playlist.push(environment.VoicesPrefix.en + enItem);
          }
        }
        if (en.length > ch.length) {
          playlist.push(
            ...en
              .slice(ch.length)
              .filter<string>(
                (x): x is string => typeof x === 'string' && x.length > 0
              )
          );
        }

        return playlist;
      }),
    );
  }

  moveNext() {
    this.runningLineService.next();
  }

  onPlayerEnded() {
    console.log('player ended');
  }
}
