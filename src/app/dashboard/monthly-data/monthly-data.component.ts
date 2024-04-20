import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import type { DashboardData } from '../types';

@Component({
  selector: 'md-monthly-data',
  templateUrl: './monthly-data.component.html',
  styleUrl: './monthly-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthlyDataComponent {

  @Input() data!: DashboardData;

  constructor() {}
}
