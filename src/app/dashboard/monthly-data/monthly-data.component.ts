import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import type { DashboardDataVM } from '../types';

@Component({
  selector: 'md-monthly-data',
  templateUrl: './monthly-data.component.html',
  styleUrl: './monthly-data.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MonthlyDataComponent implements AfterViewInit {
  @ViewChild('passengerStrongQoQ') passengerStrongQoQTpl!: TemplateRef<void>;

  @ViewChild('passengerStrongYoY') passengerStrongYoYTpl!: TemplateRef<void>;

  @Input() data!: DashboardDataVM;

  get passengerStrongTpls(): TemplateRef<void>[] {
    const tpls: TemplateRef<void>[] = [];
    if (this.data.passengerStrongVM?.compareLastMonth || this.data.passengerStrongVM?.compareLastMonthPercent) {
      tpls.push(this.passengerStrongQoQTpl);
    }
    if (this.data.passengerStrongVM?.compareLastYearPercent) {
      tpls.push(this.passengerStrongYoYTpl);
    }

    return tpls;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.cdr.detectChanges();
  }
}
