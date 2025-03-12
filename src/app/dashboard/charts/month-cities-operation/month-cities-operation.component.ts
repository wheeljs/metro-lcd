import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import type { EChartsOption } from 'echarts';
import type { DatasetComponentOption } from 'echarts/components';

import type { City, CityVM } from '../../types';
import { DrilldownableChartComponent } from '../drilldownable-chart/drilldownable-chart.component';

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
  { name: 'lines', displayName: '线路数' },
  { name: 'operationLength', displayName: '运营里程' },
];

@Component({
  selector: 'md-chart-month-cities-operation',
  templateUrl: './month-cities-operation.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class MonthCitiesBarChartComponent {

  @ViewChild('drilldownableChart') drilldownableChart!: DrilldownableChartComponent;

  topLevelOptions = (): EChartsOption => {
    return {
      grid: [
        {
          top: 70,
          right: 40,
          bottom: '50%',
          left: 48,
        },
        {
          id: 'linesGrid',
          top: 538,
          right: 40,
          left: 48,
        },
      ],
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
      xAxis: [
        {
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
          axisLine: { show: false },
          axisTick: { show: false },
        },
        {
          id: 'linesX',
          gridId: 'linesGrid',
          type: 'category',
          inverse: false,
          axisLabel: { show: false },
          axisLine: { show: false },
          axisTick: { show: false },
        },
      ],
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
        {
          id: 'linesY',
          gridId: 'linesGrid',
          name: '条',
          nameTextStyle: {
            align: 'right',
          },
          inverse: true,
          minInterval: 1,
        },
        {
          id: 'operationLengthY',
          gridId: 'linesGrid',
          name: '公里',
          nameTextStyle: {
            align: 'right',
          },
          inverse: true,
          minInterval: 1,
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
        {
          type: 'bar',
          xAxisId: 'linesX',
          yAxisId: 'linesY',
          encode: {
            seriesName: 'lines',
            x: 'city',
            y: 'lines',
            itemChildGroupId: 'id',
          },
          universalTransition: {
            enabled: true,
            divideShape: 'split',
          },
        },
        {
          type: 'bar',
          xAxisId: 'linesX',
          yAxisId: 'operationLengthY',
          encode: {
            seriesName: 'operationLength',
            x: 'city',
            y: 'operationLength',
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
          xAxisId: ['x', 'linesX'],
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

  drilldownOptions = ({ datasetId }: { datasetId: string; }): EChartsOption => {
    return {
      tooltip: {
        axisPointer: {
          type: 'line',
        },
      },
      xAxis: [
        {
          id: 'x',
          type: 'category',
          inverse: true,
          axisLabel: {
            formatter: (value) => `${value}`,
          },
        },
        {
          id: 'linesX',
          gridId: 'linesGrid',
          type: 'category',
          inverse: true,
          axisLabel: {
            formatter: (value) => `${value}`,
          },
        },
      ],
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
          symbolSize: 11,
          lineStyle: {
            width: 10,
          },
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
          symbolSize: 11,
          lineStyle: {
            width: 10,
          },
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
          symbolSize: 11,
          lineStyle: {
            width: 10,
          },
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
          symbolSize: 11,
          lineStyle: {
            width: 10,
          },
          universalTransition: {
            enabled: true,
            divideShape: 'split',
          },
        },
        {
          type: 'line',
          datasetId,
          xAxisId: 'linesX',
          yAxisId: 'linesY',
          encode: {
            x: 'range',
            y: 'lines',
            itemGroupId: 'id',
          },
          smooth: true,
          symbolSize: 11,
          lineStyle: {
            width: 10,
          },
          universalTransition: {
            enabled: true,
            divideShape: 'split',
          },
        },
        {
          type: 'line',
          datasetId,
          xAxisId: 'linesX',
          yAxisId: 'operationLengthY',
          encode: {
            x: 'range',
            y: 'operationLength',
            itemGroupId: 'id',
          },
          smooth: true,
          symbolSize: 11,
          lineStyle: {
            width: 10,
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
          show: false,
          startValue: 0,
          endValue: 100,
        },
      ],
    };
  }

  merge!: Partial<EChartsOption>;

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
      const drilldownedCity = newCities.find(x => x.id === this.drilldownableChart.drilldownedDataId);
      if (!drilldownedCity || !drilldownedCity.drilldownable) {
        this.drilldownableChart.backToTop();
      }
    }
  }

  get drilldowned() {
    return this.drilldownableChart?.drilldowned;
  }

  private dataZoomToggleOptionsCache?: Partial<EChartsOption>;

  get fullDataRange(): boolean {
    return this.dataZoomToggleOptionsCache != null;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  toggleDataZoom() {
    if (this.fullDataRange) {
      this.merge = this.dataZoomToggleOptionsCache!;
      this.dataZoomToggleOptionsCache = undefined;
    } else {
      this.dataZoomToggleOptionsCache = this.drilldownableChart.snapshotTopLevelOptions();

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
