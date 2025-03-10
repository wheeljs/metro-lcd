import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation } from '@angular/core';
import { merge } from 'lodash-es';
import type { DataZoomComponentOption, DatasetComponentOption, ECElementEvent, ECharts, EChartsOption } from 'echarts';
import type { City, CityVM } from '../../types';

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

const processCityNumbers = <T = City>(city: T): T => {
  const newCity = { ...city };
  (Object.entries(CityProperties) as [keyof T, CityProperty][])
    .forEach(([key, props]) => {
      if (props.unit && typeof city[key] === 'number') {
        (newCity as any)[key] = formatCityNumber(city[key] as number, props.unit);
      }
    });

  return newCity;
}

const ParentheseRegex = /([（\(])/g;

const CityFieldsDimensions = [
  { name: 'passengerCapacity', displayName: '客运量' },
  { name: 'inStationCapacity', displayName: '进站量' },
  { name: 'passengerStrong', displayName: '客流强度' },
  { name: 'transferCoefficient', displayName: '换乘系数' },
];

const topLevelOptions = (): EChartsOption => {
  return {
    grid: {
      top: 70,
      right: 40,
      left: 48,
    },
    legend: {
      right: 0,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow',
      },
    },
    dataset: [{
      id: 'cities',
      source: [],
      dimensions: [
        { name: 'id' },
        { name: 'city', displayName: '城市' },
        ...CityFieldsDimensions,
      ],
    }],
    xAxis: {
      id: 'x',
      type: 'category',
      inverse: false,
      axisLabel: {
        formatter: (value) => {
          if (value.length <= 2) {
            return value;
          }
          if (value.match(ParentheseRegex)) {
            return value.replace(ParentheseRegex, '\n$1');
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
    yAxis: [
      {
        id: 'leftY',
        name: '万人次',
        nameTextStyle: {
          align: 'right',
        },
      },
      {
        id: 'rightY',
        name: '万人次每公里日',
        nameTextStyle: {
          align: 'right',
        },
        alignTicks: true,
        splitLine: { show: false },
      },
    ],
    series: [
      {
        type: 'bar',
        encode: {
          seriesName: 'passengerCapacity',
          x: 'city',
          y: 'passengerCapacity',
          itemChildGroupId: 'id',
        },
        universalTransition: {
          enabled: true,
          divideShape: 'split',
        },
      },
      {
        type: 'bar',
        encode: {
          seriesName: 'inStationCapacity',
          x: 'city',
          y: 'inStationCapacity',
          itemChildGroupId: 'id',
        },
        universalTransition: {
          enabled: true,
          divideShape: 'split',
        },
      },
      {
        type: 'bar',
        yAxisIndex: 1,
        encode: {
          seriesName: 'passengerStrong',
          x: 'city',
          y: 'passengerStrong',
          itemChildGroupId: 'id',
        },
        universalTransition: {
          enabled: true,
          divideShape: 'split',
        },
      },
      {
        type: 'bar',
        yAxisIndex: 1,
        encode: {
          seriesName: 'transferCoefficient',
          x: 'city',
          y: 'transferCoefficient',
          itemChildGroupId: 'id',
        },
        universalTransition: {
          enabled: true,
          divideShape: 'split',
        },
      },
    ],
    dataZoom: [
      {
        id: 'datazoom',
        show: true,
        type: 'slider',
        startValue: 0,
        endValue: 12,
        maxValueSpan: Number.MAX_SAFE_INTEGER,
        brushSelect: false,
        bottom: 0,
      },
    ],
  };
};

const drilldownOptions = ({ datasetId }: { datasetId: string; }): EChartsOption => {
  return {
    tooltip: {
      axisPointer: {
        type: 'line',
      },
    },
    xAxis: {
      id: 'x',
      type: 'category',
      inverse: true,
      axisLabel: {
        formatter: (value) => `${value}`,
      },
    },
    yAxis: [
      {
        id: 'leftY',
        scale: true,
      },
      {
        id: 'passengerStrongY',
        min: 'dataMin',
        minInterval: 0.005,
        splitLine: { show: false },
      },
      {
        id: 'transferCoefficientY',
        show: false,
      },
    ],
    series: [
      {
        type: 'line',
        datasetId,
        encode: {
          x: 'range',
          y: 'passengerCapacity',
          itemGroupId: 'id',
        },
        smooth: true,
        universalTransition: {
          enabled: true,
          divideShape: 'split',
        },
      },
      {
        type: 'line',
        datasetId,
        encode: {
          x: 'range',
          y: 'inStationCapacity',
          itemGroupId: 'id',
        },
        smooth: true,
        universalTransition: {
          enabled: true,
          divideShape: 'split',
        },
      },
      {
        type: 'line',
        datasetId,
        yAxisId: 'passengerStrongY',
        encode: {
          x: 'range',
          y: 'passengerStrong',
          itemGroupId: 'id',
        },
        smooth: true,
        universalTransition: {
          enabled: true,
          divideShape: 'split',
        },
      },
      {
        type: 'line',
        datasetId,
        yAxisId: 'transferCoefficientY',
        encode: {
          x: 'range',
          y: 'transferCoefficient',
          itemGroupId: 'id',
        },
        smooth: true,
        universalTransition: {
          enabled: true,
          divideShape: 'split',
        },
      },
    ],
    dataZoom: [
      {
        id: 'datazoom',
        show: false,
        startValue: 0,
        endValue: 100,
      },
    ],
  };
}

@Component({
  selector: 'md-chart-month-cities-bar',
  templateUrl: './month-cities-bar-chart.component.html',
  styleUrl: './month-cities-bar-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class MonthCitiesBarChartComponent {
  merge: Partial<EChartsOption> = {};

  @Input() set cities(cities: CityVM[]) {
    if (!Array.isArray(cities)) {
      return;
    }

    const newCities = cities.map(processCityNumbers);

    const mergeOptions = {
      dataset: [{
        id: 'cities',
        source: newCities.map(({ history, ...x }) => x) as DatasetComponentOption['source'],
      }],
    };

    mergeOptions.dataset.push(
      ...newCities.filter((x) => Array.isArray(x.history)).map((x) => ({
        id: x.id,
        source: x.history?.map(processCityNumbers),
        dimensions: [
          { name: 'id' },
          { name: 'range' },
          ...CityFieldsDimensions,
        ],
      }))
    );

    this.merge = mergeOptions;
    if (this.drilldowned) {
      const drilldownedCity = newCities.find(x => x.id === this.drilldownedCityId);
      if (!drilldownedCity || !drilldownedCity.drilldownable) {
        this.backToTop();
      }
    }
  }

  options: EChartsOption = topLevelOptions();

  private chart!: ECharts;

  private topLevelOptionsCache?: Partial<EChartsOption>;

  private dataZoomToggleOptionsCache?: Partial<EChartsOption>;

  get drilldowned() {
    return this.drilldownedCityId != null;
  }

  private drilldownedCityId?: string | null;

  get fullDataRange(): boolean {
    return this.dataZoomToggleOptionsCache != null;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  onChartInit(chart: ECharts) {
    this.chart = chart;
  }

  private snapshotTopLevelOptions(): EChartsOption {
    const currentOptions = this.chart.getOption() as EChartsOption;
    return {
      dataZoom: [{
        id: 'datazoom',
        startValue: (currentOptions.dataZoom as DataZoomComponentOption[])[0]!.startValue,
        endValue: (currentOptions.dataZoom as DataZoomComponentOption[])[0]!.endValue,
      }],
    };
  }

  onChartClick(event: ECElementEvent) {
    const value = event.value as CityVM;
    if (this.drilldowned || !value.drilldownable) {
      return;
    }

    this.topLevelOptionsCache = this.snapshotTopLevelOptions();

    this.drilldownedCityId = value.id;
    this.merge = drilldownOptions({
      datasetId: value.id,
    });
  }

  backToTop() {
    let { dataset, ...options } = topLevelOptions();
    if (this.topLevelOptionsCache) {
      options = merge({}, options, this.topLevelOptionsCache);
      this.topLevelOptionsCache = undefined;
    }

    this.merge = options;
    this.drilldownedCityId = null;
  }

  toggleDataZoom() {
    if (this.fullDataRange) {
      this.merge = this.dataZoomToggleOptionsCache!;
      this.dataZoomToggleOptionsCache = undefined;
    } else {
      this.dataZoomToggleOptionsCache = this.snapshotTopLevelOptions();

      this.merge = {
        dataZoom: [{
          id: 'datazoom',
          startValue: 0,
          endValue: 100,
        }],
      };
    }

    this.cdr.detectChanges();
  }
}
