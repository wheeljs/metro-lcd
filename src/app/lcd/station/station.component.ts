import { Component, ViewEncapsulation, Input } from '@angular/core';
import { StationStatus, type RunningLine, type RunningLineStation } from '../types';
import { ContainerConfigService } from '../container-config.service';

@Component({
  selector: 'lcd-station',
  templateUrl: './station.component.html',
  styleUrl: './station.component.scss',
  host: {
    class: 'lcd-station',
    '[class.lcd-station--transferrable]': `transferrable`,
    '[class.lcd-station--disabled]': `station.disabled`,
    '[class.lcd-station--arriving-soon]': `station.status === StationStatus.ArrivingSoon`,
    '[class.lcd-station--past]': `station.status === StationStatus.Past || station.status === StationStatus.NotInService`,
  },
  encapsulation: ViewEncapsulation.None,
})
export class StationComponent {
  StationStatus = StationStatus;

  @Input() line?: RunningLine;

  @Input() station!: RunningLineStation;

  @Input() routeLineWidth!: number;

  get transferrable(): boolean {
    return this.station?.transfers?.some((x) => !x.disabled) ?? false;
  }

  get config() {
    return this.containerConfigService.config;
  }

  constructor(private containerConfigService: ContainerConfigService) {}
}
