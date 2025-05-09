import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { DashboardUiModule } from './dashboard-ui.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardIndexComponent } from './index/index.component';
import { DataService } from './services/';
import { FileService } from './services/file.service';
import { MonthlyDataComponent } from './index/components/monthly-data/monthly-data.component';
import { UnitPipe } from './pipes/unit.pipe';
import { StatisticItemComponent } from './components/statistic-item/statistic-item.component';
import { MonthCitiesBarChartComponent } from './charts/month-cities-operation/month-cities-operation.component';
import { DataVMService } from './services/data-vm.service';
import { SettingsComponent } from './components/settings/settings.component';
import { WithValuePipe } from './pipes/with-value.pipe';
import { CalculatedComponent } from './components/calculated/calculated.component';
import { DrilldownableChartComponent } from './charts/drilldownable-chart/drilldownable-chart.component';

@NgModule({
  declarations: [
    DashboardIndexComponent,
    MonthlyDataComponent,
    UnitPipe,
    StatisticItemComponent,
    MonthCitiesBarChartComponent,
    SettingsComponent,
    WithValuePipe,
    CalculatedComponent,
    DrilldownableChartComponent,
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
