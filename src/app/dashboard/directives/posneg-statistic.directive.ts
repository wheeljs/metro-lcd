import { Directive, Input, OnChanges, Optional, Self, SimpleChanges } from '@angular/core';
import { NzStatisticComponent } from 'ng-zorro-antd/statistic';

type OverrideProps = Partial<Pick<NzStatisticComponent, 'nzValueStyle'>>;

@Directive({
  selector: '[mdPosNegStatistic]',
})
export class PosnegStatisticDirective implements OnChanges {
  @Input('mdPosNegStatistic') enabled: boolean | string = true;

  @Input('mdPosNegValue') value!: number;

  constructor(@Optional() @Self() private nzStatistic: NzStatisticComponent) {}

  calcStyle(): OverrideProps {
    const { value } = this;
    const style: OverrideProps = {
      nzValueStyle: {},
    };

    if (value > 0) {
      style.nzValueStyle = { color: '#e51400' };
    } else if (value < 0) {
      style.nzValueStyle = { color: '#7cb305' };
    }

    return style;
  }

  syncStyle() {
    if (!this.enabled) {
      return;
    }

    const style = this.calcStyle();

    this.nzStatistic.nzValueStyle = style.nzValueStyle!;
  }

  ngOnChanges(): void {
    this.syncStyle();
  }
}
