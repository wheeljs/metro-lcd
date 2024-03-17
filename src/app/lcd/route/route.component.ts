import { Component, ViewEncapsulation, Input } from '@angular/core';
import type { RunningLine, RunningLineStation } from '../types';

@Component({
  selector: 'lcd-route',
  templateUrl: './route.component.html',
  styleUrl: './route.component.scss',
  host: {
    class: 'lcd-route',
    '[style.--rest-station-count]': `stations.length - 1`,
  },
  encapsulation: ViewEncapsulation.Emulated,
})
export class RouteComponent {
  @Input() line!: RunningLine;

  get stations(): RunningLineStation[] {
    return this.line?.stations ?? [];
  }
}
