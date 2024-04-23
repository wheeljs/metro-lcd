import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import type { DashboardDataVM } from '../types';
import type { DashboardConfig } from '../index/types';
import type { DatasetComponentOption, EChartsOption, LineSeriesOption } from 'echarts';

const SimpleChartLineSerie: LineSeriesOption = {
  type: 'line',
  symbol: 'none',
  smooth: true,
};

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

  @Input() config?: DashboardConfig;

  get simpleChartOptions(): EChartsOption {
    const options: EChartsOption = {
      grid: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5,
      },
      dataset: [{
        source: [],
        dimensions: [
          { name: 'id' },
          { name: 'passengerCapacity' },
          { name: 'inStationCapacity' },
          { name: 'passengerStrong' },
        ],
      }],
      tooltip: {
        show: true,
        trigger: 'axis',
      },
      xAxis: {
        type: 'category',
        inverse: true,
        boundaryGap: false,
        show: false,
      },
      yAxis: {
        show: false,
        boundaryGap: false,
        min: 'dataMin',
        max: 'dataMax',
      },
      series: [],
    };

    if (Array.isArray(this.data.monthCompare)) {
      const { data } = this;
      (options.dataset as DatasetComponentOption[])[0].source = [
        {
          id: data.id,
          passengerCapacity: data.passengerCapacity.value,
          inStationCapacity: data.inStationCapacity,
          passengerStrong: data.passengerStrong.value,
        },
        ...data?.monthCompare,
      ]?.map(x => ({
        ...x,
        passengerCapacity: (x.passengerCapacity ?? 0) / 100000000,
        inStationCapacity: (x.inStationCapacity ?? 0) / 100000000,
      }));
    }

    return options;
  };

  get passengerCapacityOptions(): Partial<EChartsOption> {
    return {
      tooltip: {
        valueFormatter: (value) => `${value}亿`,
      },
      series: [{
        ...SimpleChartLineSerie,
        encode: {
          y: 'passengerCapacity',
        },
      }],
    };
  }

  get inStationCapacityOptions(): Partial<EChartsOption> {
    return {
      tooltip: {
        valueFormatter: (value) => `${value}亿`,
      },
      color: '#91cc75',
      series: [{
        ...SimpleChartLineSerie,
        encode: {
          y: 'inStationCapacity',
        },
      }],
    };
  }

  get passengerStrongOptions(): Partial<EChartsOption> {
    return {
      color: '#fac858',
      series: [{
        ...SimpleChartLineSerie,
        encode: {
          y: 'passengerStrong',
        },
      }],
    };
  }

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
