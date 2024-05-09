import { NgModule } from '@angular/core';
import { RouteReuseStrategy, RouterModule, Routes } from '@angular/router';
import { AppRouteReuseStrategy } from './router/app-route-reuse-strategy';

const routes: Routes = [
  { path: '', redirectTo: '/lcd', pathMatch: 'full' },
  {
    path: 'lcd',
    loadChildren: () => import('./lcd/lcd.module').then(m => m.LcdModule),
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
  })],
  exports: [RouterModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: AppRouteReuseStrategy },
  ],
})
export class AppRoutingModule { }
