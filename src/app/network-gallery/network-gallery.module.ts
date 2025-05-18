import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { NetworkGalleryRoutingModule } from './network-gallery-routing.module';
import { IndexComponent } from './index/index.component';
import { DetailComponent } from './detail/detail.component';
import { SvgPanZoomDirective } from './directives/svg-pan-zoom.directive';

@NgModule({
  declarations: [
    IndexComponent,
    DetailComponent,
    SvgPanZoomDirective,
  ],
  imports: [
    SharedModule,
    NetworkGalleryRoutingModule,
  ],
})
export class NetworkGalleryModule { }
