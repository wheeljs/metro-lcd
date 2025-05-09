import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { merge } from 'lodash-es';
import type { EChartsOption } from 'echarts';
import type { ECharts, ECElementEvent } from 'echarts/core';
import type { DataZoomComponentOption } from 'echarts/components';

export type GetDrilldownOptions = {
  datasetId: string;
};

@Component({
  selector: 'md-drilldownable-chart',
  templateUrl: './drilldownable-chart.component.html',
  styleUrl: './drilldownable-chart.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class DrilldownableChartComponent implements OnInit {

  @Input('merge') set directMerge(directMerge: EChartsOption) {
    this.merge = directMerge;
  }

  @Input() topLevelOptions!: () => EChartsOption;

  @Input() drilldownOptions!: (options: GetDrilldownOptions) => EChartsOption;

  options!: EChartsOption;

  merge: Partial<EChartsOption> = {};

  private chart!: ECharts;

  private topLevelOptionsCache?: Partial<EChartsOption>;

  private _drilldownedDataId?: string | null;

  get drilldownedDataId(): string | null | undefined {
    return this._drilldownedDataId;
  }

  get drilldowned() {
    return this.drilldownedDataId != null;
  }

  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.options = this.topLevelOptions();
  }

  onChartInit(chart: ECharts) {
    this.chart = chart;
  }

  snapshotTopLevelOptions(): EChartsOption {
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
    const value = event.value as { id: string, drilldownable: boolean; };
    if (this.drilldowned || !value.drilldownable) {
      return;
    }

    this.topLevelOptionsCache = this.snapshotTopLevelOptions();

    this._drilldownedDataId = value.id;
    this.merge = this.drilldownOptions({
      datasetId: value.id,
    });
  }

  backToTop() {
    let { dataset, ...options } = this.topLevelOptions();
    if (this.topLevelOptionsCache) {
      options = merge({}, options, this.topLevelOptionsCache);
      this.topLevelOptionsCache = undefined;
    }

    this.merge = options;
    this._drilldownedDataId = null;
  }
}
