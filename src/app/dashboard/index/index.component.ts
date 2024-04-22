import { Component, Inject, Input } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { filter, tap } from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import type { DatasetComponentOption, EChartsOption } from 'echarts';
import { STORAGE } from '../../common';
import type { City, DashboardData, DashboardDataVM } from '../types';
import { DataService } from '../services';
import type { DashboardConfig } from './types';

const DashboardConfigKey = 'dashboard-config';

const formatCityNumber = (value: number, unit: number): number => {
  return Number.parseFloat((value / unit).toFixed(2));
};

interface CityProperty {
  unit?: number;
  suffix?: string;
}

const CityProperties: Partial<{ [key in keyof City]: CityProperty }> = {
  passengerCapacity: {
    unit: 10000,
    suffix: '万人次'
  },
  inStationCapacity: {
    unit: 10000,
    suffix: '万人次'
  },
  passengerStrong: {
    suffix: '万人次每公里日',
  },
};

@Component({
  selector: 'md-index',
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss',
})
export class DashboardIndexComponent {
  faSliders = faSliders;

  selectedId!: string;

  @Input() set range(val: string) {
    this.selectedId = val;
    if (this.ids.length) {
      this.rangeUpdate(val);
    }
  }

  list: Record<string, DashboardData | DashboardDataVM> = {};

  get ids() {
    return Object.keys(this.list);
  }

  get pageTitle() {
    if (!this.data) {
      return 'Dashboard'
    }

    const { year, month } = this.data;
    return `${year}年${month}月城市轨道交通运营数据`;
  }

  private _data?: DashboardDataVM;
  get data() {
    return this._data!;
  }

  set data(val: DashboardDataVM) {
    this.selectedId = val.id!;
    this._data = val;
    if (val.year && val.month) {
      this.title.setTitle(this.pageTitle);
    }
  }

  loading = true;

  options: EChartsOption = {
    grid: {
      right: 100,
      left: 100,
    },
    legend: {
      right: 100,
    },
    tooltip: {
      trigger: 'axis',
    },
    dataset: [{
      source: [],
      dimensions: [
        { name: 'city', displayName: '城市' },
        { name: 'passengerCapacity', displayName: '客运量' },
        { name: 'inStationCapacity', displayName: '进站量' },
        { name: 'passengerStrong', displayName: '客流强度' },
      ],
    }],
    xAxis: {
      type: 'category',
      axisLabel: {
        formatter: (value) => {
          if (value.length <= 2) {
            return value;
          }
          let text = [];
          for (let i = 0; i < value.length; i += 2) {
            text.push(value.slice(i, i + 2));
          }
          return text.join('\n');
        },
      },
      axisTick: { show: false },
    },
    yAxis: [{
      name: '万人次',
      nameTextStyle: {
        align: 'right',
      },
    }, {
      name: '万人次每公里日',
      nameTextStyle: {
        align: 'right',
      },
      alignTicks: true,
      splitLine: { show: false },
    }],
    series: [
      {
        type: 'bar',
        encode: {
          seriesName: 'passengerCapacity',
          y: 'passengerCapacity',
        },
      },
      {
        type: 'bar',
        encode: {
          seriesName: 'inStationCapacity',
          y: 'inStationCapacity',
        },
      },
      {
        type: 'bar',
        yAxisIndex: 1,
        encode: {
          seriesName: 'passengerStrong',
          y: 'passengerStrong',
        },
      },
    ],
    dataZoom: [
      {
        type: 'slider',
        startValue: 0,
        endValue: 12,
        maxValueSpan: Number.MAX_SAFE_INTEGER,
        brushSelect: false,
        bottom: 0,
      },
    ],
  };

  opened = false;

  _config: DashboardConfig = {
    showVolumeDiff: true,
  };

  get config() {
    return this._config;
  }

  set config(val: DashboardConfig) {
    this.localStorage[DashboardConfigKey] = JSON.stringify(val);
    this._config = val;
  }

  constructor(
    private router: Router,
    private title: Title,
    @Inject(STORAGE) private localStorage: Storage,
    private dataService: DataService,
  ) {
    if (DashboardConfigKey in localStorage) {
      this._config = JSON.parse(localStorage[DashboardConfigKey]);
    }

    this.dataService.list().pipe(
      tap(() => this.loading = true),
      filter(() => Object.keys(this.list).length === 0),
      takeUntilDestroyed(),
    ).subscribe({
      next: (list) => {
        const listMap: Record<string, DashboardData> = {};
        list.forEach(data => {
          listMap[data.id!] = data;
        });
        this.list = listMap;

        this.onRangeChange(this.selectedId || list[0].id!);
      },
    });
  }

  private unboxArrayOrObject<T>(arg: T | T[]): T {
    return Array.isArray(arg) ? arg[0] : arg;
  }

  private updateData({ data, error }: { data?: DashboardDataVM; error?: any }) {
    if (data) {
      const newData = { ...data };
      newData.cities = data.cities.map((city) => {
        const newCity = { ...city };
        (Object.entries(CityProperties) as [keyof City, CityProperty][])
          .forEach(([key, props]) => {
            if (props.unit && typeof city[key] === 'number') {
              (newCity as any)[key] = formatCityNumber(city[key] as number, props.unit);
            }
          });

        return newCity;
      });

      this.options = {
        ...this.options,
        dataset: [{
          ...this.unboxArrayOrObject(this.options.dataset),
          source: newData.cities as DatasetComponentOption['source'],
        }],
      };

      this.data = newData;
    }
  }

  onRangeChange(id: string) {
    this.loading = true;
    const listItem = this.list[id];
    this.dataService.getDataVM({
      range: id,
      hash: listItem.hash,
    }).subscribe({
      next: (data) => {
        this.list = Object.assign({}, this.list, {
          [id]: data,
        });
        if (this.selectedId !== id) {
          this.router.navigateByUrl(`/dashboard/${id}`);
        }

        this.rangeUpdate(id);
      },
    });
  }

  rangeUpdate(id: string) {
    this.updateData({
      data: this.list[id] as DashboardDataVM,
    });
    this.loading = false;
  }

  onShowVolumeDiffChange(event: MatSlideToggleChange) {
    this.config = {
      ...this.config,
      showVolumeDiff: event.checked,
    };
  }
}
