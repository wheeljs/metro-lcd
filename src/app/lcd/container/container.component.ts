import { Component, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { type Line } from '../types';
import { RunningLineService } from '../running-line.service';
import { ContainerConfigService } from '../container-config.service';

@Component({
  selector: 'lcd-container',
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss',
})
export class ContainerComponent implements OnChanges {
  @Input() line!: Line;

  runningLine!: ReturnType<RunningLineService['init']>;

  @HostBinding('style.--line-color')
  get lineColor() {
    return this.line?.color;
  }

  get config() {
    return this.containerConfigService.config;
  }

  constructor(private runningLineService: RunningLineService, private containerConfigService: ContainerConfigService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['line']) {
      this.runningLine = this.runningLineService.init(changes['line'].currentValue, this.config);
    }
  }
}
