import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../shared/shared.module';
import { DashboardUiModule } from './dashboard-ui.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardIndexComponent } from './index/index.component';
import { DataService } from './services/';
import { FileService } from './services/file.service';
import { MonthlyDataComponent } from './monthly-data/monthly-data.component';
import { UnitPipe } from './pipes/unit.pipe';
import { PosnegStatisticDirective } from './directives/posneg-statistic.directive';
import { StatisticItemComponent } from './components/statistic-item/statistic-item.component';

@NgModule({
  declarations: [
    DashboardIndexComponent,
    MonthlyDataComponent,
    UnitPipe,
    PosnegStatisticDirective,
    StatisticItemComponent,
  ],
  imports: [
    SharedModule,
    DashboardUiModule,
    DashboardRoutingModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [
    { provide: DataService, useClass: FileService },
  ],
})
export class DashboardModule { }
