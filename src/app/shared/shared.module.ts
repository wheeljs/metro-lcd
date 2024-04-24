import { NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import zh from '@angular/common/locales/zh';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NZ_I18N, zh_CN } from 'ng-zorro-antd/i18n';
import { NgClickOutsideDirective } from 'ng-click-outside2';
import { StripNewLinePipe } from './strip-new-line.pipe';

registerLocaleData(zh);

const ExportsAsIs = [
  CommonModule,
  HttpClientModule,
  FontAwesomeModule,
  NgClickOutsideDirective,
];

@NgModule({
  declarations: [StripNewLinePipe],
  imports: [
    ...ExportsAsIs,
  ],
  exports: [
    ...ExportsAsIs,
    StripNewLinePipe,
  ],
  providers: [
    { provide: NZ_I18N, useValue: zh_CN },
  ],
})
export class SharedModule {}
