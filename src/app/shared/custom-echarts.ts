import * as echarts from 'echarts/core';
import {
  BarChart, BarSeriesOption,
  LineChart, LineSeriesOption,
} from 'echarts/charts';
import {
  DatasetComponent, DatasetComponentOption,
  DataZoomComponent, DataZoomComponentOption,
  GridComponent, GridComponentOption,
  LegendComponent, LegendComponentOption,
  TooltipComponent, TooltipComponentOption,
} from 'echarts/components';
import { CanvasRenderer } from 'echarts/renderers';

export type EChartsOption = echarts.ComposeOption<
  BarSeriesOption |
  LineSeriesOption |
  DatasetComponentOption |
  DataZoomComponentOption |
  GridComponentOption |
  LegendComponentOption |
  TooltipComponentOption
>;

echarts.use([
  BarChart,
  LineChart,
  DatasetComponent,
  DataZoomComponent,
  GridComponent,
  LegendComponent,
  TooltipComponent,
  CanvasRenderer,
]);

export default echarts;
