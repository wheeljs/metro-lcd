import { Component, ViewEncapsulation, Input } from '@angular/core';
import { faRotate } from '@fortawesome/free-solid-svg-icons';
import type { RunningLineStation } from '../types';

@Component({
  selector: 'lcd-station',
  templateUrl: './station.component.html',
  styleUrl: './station.component.scss',
  host: {
    class: 'lcd-station',
    '[class.lcd-station--transferrable]': `transferrable`,
    '[class.lcd-station--arriving-soon]': `station.status === 'arriving-soon'`,
    '[class.lcd-station--past]': `station.status === 'past' || station.status === 'not-in-service'`,
  },
  encapsulation: ViewEncapsulation.None,
})
export class StationComponent {
  transferIcon = faRotate;

  @Input() station!: RunningLineStation;

  @Input() routeLineWidth!: number;

  get transferrable(): boolean {
    return this.station?.transfers?.some((x) => !x.disabled) ?? false;
  }
}
