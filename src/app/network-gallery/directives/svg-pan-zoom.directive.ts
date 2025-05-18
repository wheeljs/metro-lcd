import { Directive, ElementRef, inject, OnDestroy } from '@angular/core';

import svgPanZoom from 'svg-pan-zoom';

@Directive({
  selector: '[ngaSvgPanZoom]',
  standalone: false,
  host: {
    '(load)': 'initSvgPanZoom()'
  },
})
export class SvgPanZoomDirective implements OnDestroy {
  private readonly el = inject(ElementRef);

  instance!: typeof svgPanZoom;

  initSvgPanZoom() {
    this.instance = svgPanZoom(this.el.nativeElement, {
      contain: true,
      center: true,
      zoomEnabled: true,
      zoomScaleSensitivity: 0.5,
      minZoom: 1,
      controlIconsEnabled: true,
    });
  }

  ngOnDestroy() {
    this.instance?.destroy?.();
  }
}
