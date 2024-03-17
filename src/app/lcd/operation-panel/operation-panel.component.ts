import { Component, ViewEncapsulation } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ContainerConfigService } from '../container-config.service';
import type { ContainerConfig } from '../types';
import { RunningLineService } from '../running-line.service';

@Component({
  selector: 'lcd-operation-panel',
  templateUrl: './operation-panel.component.html',
  styleUrl: './operation-panel.component.scss',
  host: {
    class: 'lcd-operation-panel',
    '[class.lcd-operation-panel--collapsed]': `collapsed`,
  },
  encapsulation: ViewEncapsulation.None,
})
export class OperationPanelComponent {
  collapseIcon = faAngleDown;

  collapsed = false;

  get config() {
    return this.containerConfigService.config;
  }

  get playlist$() {
    return this.runningLineService.playlist$;
  }

  constructor(
    private runningLineService: RunningLineService,
    private containerConfigService: ContainerConfigService
  ) {}

  togglePanel() {
    this.collapsed = !this.collapsed;
  }

  moveNext() {
    this.runningLineService.next();
  }

  onPlayerEnded() {
    if (this.config.nextOnAudioEnded) {
      setTimeout(() => this.moveNext(), this.config.nextGap);
    }
  }

  private _updateConfig(key: keyof ContainerConfig, value: ContainerConfig[typeof key]) {
    this.containerConfigService.update({
      [key]: value,
    });
  }

  updateConfig(key: keyof ContainerConfig, value: Event) {
    this._updateConfig(key, (value.target as HTMLInputElement).value);
  }

  updateBooleanConfig(key: keyof ContainerConfig, value: Event) {
    this._updateConfig(key, (value.target as HTMLInputElement).checked);
  }
}
