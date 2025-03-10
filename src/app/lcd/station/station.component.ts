import { Component, ViewEncapsulation, Input } from '@angular/core';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { StationStatus, type RunningLine, type RunningLineStation } from '../types';
import { ContainerConfigService } from '../container-config.service';

@Component({
  selector: 'lcd-station',
  templateUrl: './station.component.html',
  styleUrl: './station.component.scss',
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class StationComponent {
  settingIcon = faGear;

  StationStatus = StationStatus;

  @Input() line?: RunningLine;

  @Input() station!: RunningLineStation;

  showEditingBar = false;

  get transferrable(): boolean {
    return this.station?.transfers?.some((x) => !x.disabled) ?? false;
  }

  get config() {
    return this.containerConfigService.config;
  }

  constructor(private containerConfigService: ContainerConfigService) {}

  toggleEditingBar() {
    this.showEditingBar = !this.showEditingBar;
  }

  clickOutside() {
    this.showEditingBar = false;
  }
}
