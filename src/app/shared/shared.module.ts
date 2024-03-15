import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StripNewLinePipe } from './strip-new-line.pipe';

const ExportsAsIs = [CommonModule, FontAwesomeModule];

@NgModule({
  declarations: [StripNewLinePipe],
  imports: [...ExportsAsIs],
  exports: [...ExportsAsIs, StripNewLinePipe],
})
export class SharedModule {}
