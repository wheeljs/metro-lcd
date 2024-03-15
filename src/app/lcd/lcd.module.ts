import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SplitorComponent } from './splitor/splitor.component';
import { HeaderComponent } from './header/header.component';
import { ContainerComponent } from './container/container.component';
import { RouteComponent } from './route/route.component';
import { StationComponent } from './station/station.component';
import { LineNamePipe } from './line-name.pipe';
import { PlayerComponent } from './player/player.component';
// import { PlayerComponent } from './player/player-rxjs2.component';
import { OperationPanelComponent } from './operation-panel/operation-panel.component';
import { TransferIconComponent } from './transfer-icon/transfer-icon.component';
import { ToolbarComponent } from './station/toolbar/toolbar.component';
import { OutletComponent } from './outlet/outlet.component';

@NgModule({
  declarations: [
    SplitorComponent,
    HeaderComponent,
    ContainerComponent,
    RouteComponent,
    StationComponent,
    LineNamePipe,
    PlayerComponent,
    OperationPanelComponent,
    TransferIconComponent,
    ToolbarComponent,
    OutletComponent,
  ],
  imports: [SharedModule],
  exports: [OutletComponent],
})
export class LcdModule {}
