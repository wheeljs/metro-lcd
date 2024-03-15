import { Component } from '@angular/core';
import * as Lines from '../defs/';
import { ContainerConfigService } from '../container-config.service';
import { RunningLineService } from '../running-line.service';

@Component({
  selector: 'lcd-outlet',
  templateUrl: './outlet.component.html',
  styleUrl: './outlet.component.scss',
  providers: [RunningLineService, ContainerConfigService],
})
export class OutletComponent {
  line = Lines.Line2;
}
