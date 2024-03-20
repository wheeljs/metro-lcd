import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { StripNewLinePipe } from './strip-new-line.pipe';

const ExportsAsIs = [
  CommonModule,
  FontAwesomeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatSelectModule,
  MatSlideToggleModule,
  NgClickOutsideDirective,
];

@NgModule({
  declarations: [StripNewLinePipe],
  imports: [...ExportsAsIs],
  exports: [...ExportsAsIs, StripNewLinePipe],
})
export class SharedModule {}
