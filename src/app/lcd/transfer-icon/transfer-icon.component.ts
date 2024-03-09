import { ChangeDetectionStrategy, Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'lcd-transfer-icon',
  templateUrl: './transfer-icon.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    '[style.--primary-color]': `mainColor`,
    '[style.--secondary-color]': `transferColor || mainColor`,
  },
})
export class TransferIconComponent {
  @Input() mainColor!: string;

  @Input() transferColor?: string;
}
