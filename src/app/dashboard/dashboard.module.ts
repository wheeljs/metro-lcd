import { NgModule } from '@angular/core';
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
import { MonthCitiesBarChartComponent } from './charts/month-cities-bar-chart/month-cities-bar-chart.component';
import { DataVMService } from './services/data-vm.service';

@NgModule({
  declarations: [
    DashboardIndexComponent,
    MonthlyDataComponent,
    UnitPipe,
    PosnegStatisticDirective,
    StatisticItemComponent,
    MonthCitiesBarChartComponent,
  ],
  imports: [
    SharedModule,
    DashboardUiModule,
    DashboardRoutingModule,
  ],
  providers: [
    { provide: DataService, useClass: FileService },
    DataVMService,
  ],
})
export class DashboardModule { }
