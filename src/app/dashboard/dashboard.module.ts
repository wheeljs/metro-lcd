import { NgModule } from '@angular/core';
import { NgxEchartsModule } from 'ngx-echarts';
import { SharedModule } from '../shared/shared.module';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardIndexComponent } from './index/index.component';
import { DataService } from './services/';
import { FirebaseService } from './services/firebase.service';

@NgModule({
  declarations: [
    DashboardIndexComponent,
  ],
  imports: [
    SharedModule,
    DashboardRoutingModule,

    NgxEchartsModule.forRoot({
      echarts: () => import('echarts'),
    }),
  ],
  providers: [
    { provide: DataService, useClass: FirebaseService },
  ],
})
export class DashboardModule { }
