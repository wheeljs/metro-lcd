import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { RunningLine, RunningLineStation, StationStatus } from '../../types';
import { ContainerConfigService } from '../../container-config.service';

@Component({
  selector: 'lcd-station-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.scss',
  host: {
    class: 'lcd-station__toolbar',
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent {
  @Input() line?: RunningLine;

  @Input() station!: RunningLineStation;

  constructor(private containerConfigService: ContainerConfigService) {}

  setFrom() {
    this.containerConfigService.update({
      from: this.station.id,
    });
  }

  toggleEnabled() {
    this.containerConfigService.toggleStationDisabled(this.station.id);
  }

  setTo() {
    if (this.line) {
      const { from, stations } = this.line;
      const fromIndex = stations.findIndex(x => x.id === from.id);
      const stationIndex = stations.findIndex(x => x.id === this.station.id);
      if (stationIndex === fromIndex) {
        alert('起始站和终点站不能为同一站');
        return;
      } else if (stationIndex < fromIndex) {
        alert('终点站不能在起始站前');
        return;
      }
    }

    this.containerConfigService.update({
      to: this.station.id,
    });
  }
}
