import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import type { EChartsOption } from 'echarts';
import type { City } from '../../types';

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
  selector: 'md-chart-month-cities-bar',
  template: `<div echarts [options]="options" [merge]="merge"></div>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MonthCitiesBarChartComponent {
  merge: Partial<EChartsOption> = {};

  @Input() set cities(cities: City[]) {
    if (!Array.isArray(cities)) {
      return;
    }

    const newCities = cities.map((city) => {
      const newCity = { ...city };
      (Object.entries(CityProperties) as [keyof City, CityProperty][])
        .forEach(([key, props]) => {
          if (props.unit && typeof city[key] === 'number') {
            (newCity as any)[key] = formatCityNumber(city[key] as number, props.unit);
          }
        });

      return newCity;
    });

    this.merge = {
      dataset: [{
        id: 'cities',
        source: newCities,
      }],
    };
  }

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
      id: 'cities',
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
}
