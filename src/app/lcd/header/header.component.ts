import { Component, Input } from '@angular/core';
import type { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { RunningLineService } from '../running-line.service';
import { StationStatus } from '../types';
import type { RunningLine, RunningLineStation } from '../types';

@Component({
  selector: 'lcd-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  splitorIcon = faAngleRight;

  @Input() line!: RunningLine;

  running$: Observable<RunningLineStation | null>;

  constructor(private runningLineService: RunningLineService) {
    this.running$ = runningLineService.runningState$.pipe(
      map((state) => {
        if (!state) {
          return null;
        }

        const { current } = state;
        if (current.status !== StationStatus.Past) {
          return current;
        }

        return state.next;
      })
    );
  }
}
