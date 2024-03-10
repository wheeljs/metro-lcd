import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContainerConfig, RunningLine } from './types';

@Injectable()
export class ContainerConfigService {

  private configSubject = new BehaviorSubject<ContainerConfig>({
    nextOnAudioEnded: true,
    disabledStations: [],
  });

  get config$() {
    return this.configSubject.asObservable();
  }

  get config() {
    return this.configSubject.getValue();
  }

  constructor() { }

  update(config: Partial<ContainerConfig>) {
    this.configSubject.next(Object.assign({}, this.configSubject.value, config));
  }

  toggleStationDisabled(id: RunningLine['id']) {
    const { disabledStations } = this.config;
    let nextDisabledStations;
    if (disabledStations.includes(id)) {
      nextDisabledStations = disabledStations.filter(x => x !== id);
    } else {
      nextDisabledStations = [...disabledStations, id];
    }

    this.update({ disabledStations: nextDisabledStations });
  }
}