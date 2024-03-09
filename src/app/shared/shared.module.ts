import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StripNewLinePipe } from './strip-new-line.pipe';

@NgModule({
  declarations: [StripNewLinePipe],
  imports: [CommonModule, FontAwesomeModule],
  exports: [CommonModule, FontAwesomeModule, StripNewLinePipe],
})
export class SharedModule {}
