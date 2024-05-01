import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'md-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent {
  private _collapsed = true;

  set collapsed(val: boolean) {
    this._collapsed = val;
    this.collapsedChange.emit(val);
  }

  get collapsed() {
    return this._collapsed;
  }

  transitioning = false;

  @Input() settings!: TemplateRef<{ $implicit: boolean }>;

  @Output() collapsedChange = new EventEmitter<boolean>();

  toggle() {
    if (!this.collapsed) {
      this.transitioning = true;
    }
    this.collapsed = !this.collapsed;
  }

  onClickOutside(event: Event) {
    const clickedOptions = (event.target as HTMLElement).matches('[class*="ant-select-item-option"]');
    if (!clickedOptions) {
      this.collapsed = true;
    }
  }

  onContainerTransitionEnd() {
    this.transitioning = false;
  }
}
