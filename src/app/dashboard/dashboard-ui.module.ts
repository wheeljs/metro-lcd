import { NgModule } from '@angular/core';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import type { IconDefinition } from '@ant-design/icons-angular';
import { ArrowLeftOutline, InfoCircleOutline, LeftOutline } from '@ant-design/icons-angular/icons';

import echarts from '../shared/echarts/custom-echarts';

const icons: IconDefinition[] = [
  ArrowLeftOutline,
  InfoCircleOutline,
  LeftOutline,
];

const ExportsAsIs = [
  NzButtonModule,
  NzCardModule,
  NzDividerModule,
  NzFlexModule,
  NzFormModule,
  NzGridModule,
  NzPopoverModule,
  NzSelectModule,
  NzSpaceModule,
  NzSpinModule,
  NzSwitchModule,
  NzStatisticModule,
  NgxEchartsDirective,
];

@NgModule({
  imports: [
    ...ExportsAsIs,
    NzIconModule.forChild(icons),
  ],
  exports: [
    ...ExportsAsIs,
    NzIconModule,
  ],
  providers: [
    provideEchartsCore({
      echarts,
      theme: 'g2',
    }),
  ],
})
export class DashboardUiModule {}
