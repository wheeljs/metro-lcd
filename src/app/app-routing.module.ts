import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
  {
    path: 'network-gallery',
    loadChildren: () => import('./network-gallery/network-gallery.module').then(m => m.NetworkGalleryModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    bindToComponentInputs: true,
  })],
  exports: [RouterModule],
})
export class AppRoutingModule { }
