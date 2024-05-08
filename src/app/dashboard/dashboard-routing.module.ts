import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: ':range',
    component: DashboardIndexComponent,
    data: {
      reuseId: 'dashboard-index',
    },
  },
  {
    path: '',
    component: DashboardIndexComponent,
    data: {
      reuseId: 'dashboard-index',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
