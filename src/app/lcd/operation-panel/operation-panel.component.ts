import { Component, ViewEncapsulation, Input, TemplateRef } from '@angular/core';
import { type Observable, map, shareReplay } from 'rxjs';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { ContainerConfigService } from '../container-config.service';
import type { ContainerConfig } from '../types';
import { RunningLineService } from '../running-line.service';
import { ChangelogService } from '../../app/changelog.service';

@Component({
  selector: 'lcd-operation-panel',
  templateUrl: './operation-panel.component.html',
  styleUrl: './operation-panel.component.scss',
  host: {
    class: 'lcd-operation-panel',
    '[class.lcd-operation-panel--collapsed]': `collapsed`,
  },
  encapsulation: ViewEncapsulation.None,
  standalone: false,
})
export class OperationPanelComponent {
  collapseIcon = faAngleDown;

  collapsed = false;

  @Input() customOperation?: TemplateRef<{ $implicit: ContainerConfig }>;

  get config() {
    return this.containerConfigService.config;
  }

  playlist$: Observable<string[]> = this.runningLineService.playlist$.pipe(
    map((voices) => voices.map(voice => voice?.voiceUrl)),
    shareReplay(1),
  );

  constructor(
    private runningLineService: RunningLineService,
    private containerConfigService: ContainerConfigService,
    private changelogService: ChangelogService,
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

  updateBooleanConfig(key: keyof ContainerConfig, event: MatSlideToggleChange) {
    this._updateConfig(key, event.checked);
  }

  showChangelog() {
    this.changelogService.show();
  }
}
