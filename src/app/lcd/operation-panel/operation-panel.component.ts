import { Component, ViewEncapsulation } from '@angular/core';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { ContainerComponent } from '../container/container.component';

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

  constructor(public container: ContainerComponent) {}

  togglePanel() {
    this.collapsed = !this.collapsed;
  }
}
