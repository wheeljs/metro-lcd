import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardIndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: ':range',
    component: DashboardIndexComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'latest',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
