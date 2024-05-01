import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import type { IconDefinition } from '@ant-design/icons-angular';
import { InfoCircleOutline } from '@ant-design/icons-angular/icons';

import echarts from '../shared/echarts/custom-echarts';

const icons: IconDefinition[] = [InfoCircleOutline];

const ExportsAsIs = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSidenavModule,
  MatSlideToggleModule,
  NzCardModule,
  NzFlexModule,
  NzGridModule,
  NzPopoverModule,
  NzSpinModule,
  NzStatisticModule,
  NgxEchartsDirective,
];

@NgModule({
  imports: [
    ...ExportsAsIs,
    NzIconModule.forRoot(icons),
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
