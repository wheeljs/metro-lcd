import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output, TemplateRef, ViewEncapsulation } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, filter, map, pairwise } from 'rxjs';
import { throttle } from 'lodash-es';

@Component({
  selector: 'md-settings',
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SettingsComponent implements OnInit, OnDestroy {
  private _collapsed = true;

  set collapsed(val: boolean) {
    this._collapsed = val;
  }

  get collapsed() {
    return this._collapsed;
  }

  transitioning = false;

  @Input() settings!: TemplateRef<{ $implicit: boolean }>;

  private autoHideTimer?: number;

  private mousemoveSubject = new Subject<PointerEvent | null>();

  mousemove$ = this.mousemoveSubject.pipe(
    takeUntilDestroyed(),
    pairwise(),
    filter(([prev, current]) => {
      const xDiff = Math.abs(prev!.clientX - current!.clientX);
      const yDiff = Math.abs(prev!.clientY - current!.clientY);
      return xDiff > 20 || yDiff > 20;
    }),
    map(([_, current]) => current),
  );

  private _visible = false;

  @Input() set visible(val: boolean) {
    this._visible = val;
    if (val) {
      this.clearAutoHideTimer();

      this.autoHideTimer = setTimeout(() => {
        if (this.collapsed) {
          this._visible = false;
          this.visibleChange.emit(false);

          this.cdr.markForCheck();
        }
      }, this.hideDelay);
    }
  }

  get visible() {
    return this._visible;
  }

  @Output() visibleChange = new EventEmitter<boolean>();

  @Input() hideDelay = 2000;

  constructor(private cdr: ChangeDetectorRef) {}

  @HostListener('document:mousemove', ['$event'])
  onMousemove = throttle((event: PointerEvent) => {
    this.mousemoveSubject.next(event);
  }, 500);

  @HostListener('click')
  onClick() {
    this.clearAutoHideTimer();
  }

  ngOnInit() {
    this.mousemove$.subscribe({
      next: () => this.visible = true,
    });
  }

  ngOnDestroy() {
    this.clearAutoHideTimer();
  }

  private clearAutoHideTimer() {
    if (this.autoHideTimer) {
      clearTimeout(this.autoHideTimer);
      this.autoHideTimer = undefined;
    }
  }

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
