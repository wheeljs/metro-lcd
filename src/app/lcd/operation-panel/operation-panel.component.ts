import { Component, ViewEncapsulation } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ContainerComponent } from '../container/container.component';
import { ContainerConfigService } from '../container-config.service';
import type { ContainerConfig } from '../types';

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

  constructor(public container: ContainerComponent, private containerConfigService: ContainerConfigService) {}

  togglePanel() {
    this.collapsed = !this.collapsed;
  }

  updateConfig(key: keyof ContainerConfig, value: Event) {
    this.containerConfigService.update({
      [key]: (value.target as HTMLInputElement).value,
    });
  }

  updateBooleanConfig(key: keyof ContainerConfig, value: Event) {
    this.containerConfigService.update({
      [key]: (value.target as HTMLInputElement).checked,
    });
  }
}
