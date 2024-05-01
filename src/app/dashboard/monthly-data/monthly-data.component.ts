import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, TemplateRef, ViewChild } from '@angular/core';
import { merge } from 'lodash-es';
import type { DatasetComponentOption, EChartsOption, LineSeriesOption } from 'echarts';
import { colors, linearGradient } from '../../shared/echarts/utils';
import type { DashboardDataVM } from '../types';
import type { DashboardConfig } from '../index/types';

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

  passengerCapacityOptions!: EChartsOption;
  inStationCapacityOptions!: EChartsOption;
  passengerStrongOptions!: EChartsOption;

  private _data!: DashboardDataVM;

  @Input() set data(val: DashboardDataVM) {
    this._data = val;

    this.updateSimpleChartOptions();
  };

  get data() {
    return this._data;
  }

  @Input() config?: DashboardConfig;

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

  updateSimpleChartOptions() {
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
        min: (values) => Math.max(values.min - 1, 0),
        max: 'dataMax',
      },
      series: [],
    };

    if (this.data.monthCompare?.length > 0) {
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

    this.passengerCapacityOptions = merge<EChartsOption, EChartsOption, EChartsOption>({}, options, {
      tooltip: {
        valueFormatter: (value) => `${value}亿`,
      },
      series: [{
        ...SimpleChartLineSerie,
        encode: {
          y: 'passengerCapacity',
        },
        lineStyle: { opacity: 0 },
        areaStyle: {
          opacity: 1,
          color: linearGradient({ color: colors()[0] }),
        },
      }],
    });

    this.inStationCapacityOptions = merge<EChartsOption, EChartsOption, EChartsOption>({}, options, {
      tooltip: {
        valueFormatter: (value) => `${value}亿`,
      },
      color: '#91cc75',
      series: [{
        ...SimpleChartLineSerie,
        encode: {
          y: 'inStationCapacity',
        },
        lineStyle: { opacity: 0 },
        areaStyle: {
          opacity: 1,
          color: linearGradient({ color: colors()[1] }),
        },
      }],
    });

    this.passengerStrongOptions = merge<EChartsOption, EChartsOption, EChartsOption>({}, options, {
      color: '#fac858',
      yAxis: {
        min: (values) => Math.max(values.min - 0.05, 0),
      },
      series: [{
        ...SimpleChartLineSerie,
        encode: {
          y: 'passengerStrong',
        },
        lineStyle: { opacity: 0 },
        areaStyle: {
          opacity: 1,
          color: linearGradient({ color: colors()[2] }),
        },
      }],
    });
  };
}
