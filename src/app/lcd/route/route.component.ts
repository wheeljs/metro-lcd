import {
  Component,
  ViewEncapsulation,
  Input,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import type { RunningLine, RunningLineStation } from '../types';

@Component({
  selector: 'lcd-route',
  templateUrl: './route.component.html',
  styleUrl: './route.component.scss',
  host: {
    class: 'lcd-route',
  },
  encapsulation: ViewEncapsulation.Emulated,
})
export class RouteComponent implements AfterViewChecked {
  @Input() line!: RunningLine;

  @ViewChild('lineEl', { read: ElementRef })
  lineElRef!: ElementRef<HTMLDivElement>;

  stationRouteLineWidth = 0;

  get stations(): RunningLineStation[] {
    return this.line?.stations ?? [];
  }

  ngAfterViewChecked() {
    setTimeout(() => {
      const rect = this.lineElRef?.nativeElement?.getBoundingClientRect?.();
      if (!rect?.width) {
        this.stationRouteLineWidth = 0;
        return;
      }

      this.stationRouteLineWidth = rect.width / this.stations.length - 40;
    });
  }
}
