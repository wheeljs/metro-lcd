import { Component, Input, TemplateRef, ViewChild, LOCALE_ID, Inject, SimpleChanges, AfterViewInit, OnChanges, ChangeDetectorRef, ViewEncapsulation } from '@angular/core';
import { formatNumber, formatPercent } from '@angular/common';
import { BooleanInput } from 'ng-zorro-antd/core/types';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import { NzStatisticComponent } from 'ng-zorro-antd/statistic';
import { faArrowUp, faArrowDown, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { formatUnit, Units } from '../../pipes/unit.pipe';

@Component({
  selector: 'md-statistic-item',
  templateUrl: './statistic-item.component.html',
  styleUrl: './statistic-item.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class StatisticItemComponent implements OnChanges, AfterViewInit {
  static ngAcceptInputType_percent: BooleanInput;
  static ngAcceptInputType_autoPrefix: BooleanInput;
  static ngAcceptInputType_autoColor: BooleanInput;

  upIcon = faArrowUp;

  plusIcon = faPlus;

  downIcon = faArrowDown;

  minusIcon = faMinus;

  @ViewChild('upPrefix') upPrefix!: TemplateRef<void>;

  @ViewChild('downPrefix') downPrefix!: TemplateRef<void>;

  @Input() prefixMode: 'arrow' | 'plusminus' = 'arrow';

  @Input() nzTitle?: NzStatisticComponent['nzTitle'];

  @Input() nzSuffix?: NzStatisticComponent['nzSuffix'];

  @Input() value!: number;

  @Input() unit?: keyof typeof Units;

  @Input() valueFormat = '1.0-1';

  @Input() @InputBoolean() percent = false;

  @Input() @InputBoolean() autoPrefix = false;

  @Input() @InputBoolean() autoColor = false;

  nzPrefix: NzStatisticComponent['nzPrefix'];

  get nzValue() {
    const { value, unit, valueFormat, percent, locale } = this;
    if (percent) {
      return formatPercent(Math.abs(value), locale, valueFormat);
    }

    return formatNumber(formatUnit(Math.abs(value), unit)!, locale, valueFormat);
  }

  get nzSuffixProp() {
    return this.nzSuffix ?? this.unit;
  }

  constructor(@Inject(LOCALE_ID) private locale: string, private changeDetectorRef: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.updateNzPrefix();
    this.changeDetectorRef.detectChanges();
  }

  ngOnChanges(simpleChanges: SimpleChanges) {
    if (simpleChanges['value'] || simpleChanges['autoPrefix']) {
      if (!(simpleChanges['value'] ?? simpleChanges['autoPrefix']).isFirstChange()) {
        this.updateNzPrefix();
      }
    }
  }

  private updateNzPrefix() {
    if (this.autoPrefix) {
      if (this.value > 0) {
        this.nzPrefix = this.upPrefix;
      } else if (this.value < 0) {
        this.nzPrefix = this.downPrefix;
      }
    } else {
      this.nzPrefix = undefined;
    }
  }
}
