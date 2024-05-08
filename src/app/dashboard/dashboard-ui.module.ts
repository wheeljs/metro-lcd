import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, forkJoin, map, of } from 'rxjs';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule, NzIconService } from 'ng-zorro-antd/icon';
import { NzInputNumberModule } from 'ng-zorro-antd/input-number';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzResultModule } from 'ng-zorro-antd/result';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzSpaceModule } from 'ng-zorro-antd/space';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzSwitchModule } from 'ng-zorro-antd/switch';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';
import { NgxEchartsDirective, provideEchartsCore } from 'ngx-echarts';

import type { IconDefinition } from '@ant-design/icons-angular';
import {
  ArrowLeftOutline,
  InfoCircleOutline,
  LeftOutline,
  PlusSquareFill,
} from '@ant-design/icons-angular/icons';

import echarts from '../shared/echarts/custom-echarts';

const icons: IconDefinition[] = [
  ArrowLeftOutline,
  InfoCircleOutline,
  LeftOutline,
  PlusSquareFill,
];

const ExportsAsIs = [
  NzButtonModule,
  NzCardModule,
  NzDividerModule,
  NzFlexModule,
  NzFormModule,
  NzGridModule,
  NzInputNumberModule,
  NzPopoverModule,
  NzResultModule,
  NzSelectModule,
  NzSpaceModule,
  NzSpinModule,
  NzSwitchModule,
  NzStatisticModule,
  NgxEchartsDirective,
];

interface AdditionalIconDefinition {
  icon: string;
  svg: string;
};

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
export class DashboardUiModule {
  constructor(httpClient: HttpClient, nzIconService: NzIconService) {
    forkJoin(
      ['line', 'operation-length', 'segment', 'train'].map((icon) =>
        httpClient.get(`/assets/imgs/${icon}.svg`, { responseType: 'text' }).pipe(
          map((iconSvg) => ({
            icon,
            svg: iconSvg,
          } as AdditionalIconDefinition)),
          catchError(() => of(null))
        )
      )
    ).pipe(
      map((icons) => icons.filter((x) => x != null) as AdditionalIconDefinition[]),
    ).subscribe({
      next: (icons) => {
        icons.forEach(({ icon, svg }) => {
          nzIconService.addIconLiteral(`dashboard:${icon}`, svg);
        });
      }
    });
  }
}
