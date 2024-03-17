import { Component, HostBinding, Input } from '@angular/core';
import { Subject, combineLatestWith, tap } from 'rxjs';
import { type Line } from '../types';
import { RunningLineService } from '../running-line.service';
import { ContainerConfigService } from '../container-config.service';

@Component({
  selector: 'lcd-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent {
  private lineSubject = new Subject<Line>();

  @Input() set line(line: Line) {
    this.lineSubject.next(line);
  }

  runningLine!: ReturnType<RunningLineService['init']>;

  @HostBinding('style.--line-color')
  get lineColor() {
    return this.runningLine.color;
  }

  get config() {
    return this.containerConfigService.config;
  }

  constructor(private runningLineService: RunningLineService, private containerConfigService: ContainerConfigService) {
    this.lineSubject.pipe(
      tap((line) => {
        this.containerConfigService.reset({
          disabledStations: line.stations.filter(x => x.disabled).map(x => x.id),
        });
      }),
      combineLatestWith(this.containerConfigService.config$),
    ).subscribe(([line, config]) => {
      this.runningLine = this.runningLineService.init(line, config);
    });
  }
}
