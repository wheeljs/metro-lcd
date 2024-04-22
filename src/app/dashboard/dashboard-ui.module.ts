import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzFlexModule } from 'ng-zorro-antd/flex';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPopoverModule } from 'ng-zorro-antd/popover';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzStatisticModule } from 'ng-zorro-antd/statistic';

import type { IconDefinition } from '@ant-design/icons-angular';
import { InfoCircleOutline } from '@ant-design/icons-angular/icons';

const icons: IconDefinition[] = [InfoCircleOutline];

const ExportsAsIs = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatSelectModule,
  MatSidenavModule,
  NzCardModule,
  NzFlexModule,
  NzGridModule,
  NzPopoverModule,
  NzSpinModule,
  NzStatisticModule,
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
})
export class DashboardUiModule {}
