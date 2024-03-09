import {
  ChangeDetectionStrategy,
  Component,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

enum SplitorSpeed {
  Default = 'default',
  Faster = 'faster',
}

@Component({
  selector: 'lcd-splitor',
  templateUrl: './splitor.component.html',
  styleUrl: './splitor.component.scss',
  host: {
    class: 'lcd-splitor',
    '[class.lcd-splitor--animate-faster]': `speed === 'faster'`,
    '[class.lcd-splitor--animating]': `animating`,
    '[style.color]': `color`,
  },
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class SplitorComponent {
  splitorIcon = faAngleRight;

  @Input() animating = true;

  @Input() color = '#000';

  @Input() speed: string | SplitorSpeed = SplitorSpeed.Default;
}
