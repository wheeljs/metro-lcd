import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';

const ExportsAsIs = [
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
];

@NgModule({
  imports: [...ExportsAsIs],
  exports: [...ExportsAsIs],
})
export class DashboardUiModule {}
