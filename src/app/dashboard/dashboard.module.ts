import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../shared/shared.module';
import { DashboardUiModule } from './dashboard-ui.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardIndexComponent } from './index/index.component';
import { DataService } from './services/';
import { FileService } from './services/file.service';

@NgModule({
  declarations: [
    DashboardIndexComponent,
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
