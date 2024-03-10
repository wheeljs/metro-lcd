import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ContainerConfig, RunningLine } from './types';

@Injectable()
export class ContainerConfigService {

  private configSubject = new BehaviorSubject<ContainerConfig>({
    nextOnAudioEnded: true,
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
}
