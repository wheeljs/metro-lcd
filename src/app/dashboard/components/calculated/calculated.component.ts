import { Component, Input, ViewEncapsulation } from '@angular/core';
import { InputBoolean } from 'ng-zorro-antd/core/util';
import type { BooleanInput } from 'ng-zorro-antd/core/types';
import type { NzTooltipDirective } from 'ng-zorro-antd/tooltip';
import { DashboardIndexContextService } from '../../index/dashboard-index-context.service';

@Component({
  selector: 'md-calculated',
  templateUrl: './calculated.component.html',
  styleUrl: './calculated.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CalculatedComponent {
  static ngAcceptInputType_force: BooleanInput;

  @Input() field?: string;

  @Input() @InputBoolean() force?: boolean;

  get fieldCalculated(): boolean {
    if (this.field && Array.isArray(this.contextService.context.calculatedFields)) {
      return this.contextService.context.calculatedFields.includes(this.field);
    }

    return false;
  }

  get calculated(): boolean {
    return this.force ?? this.fieldCalculated;
  }

  get nzTooltipTrigger(): NzTooltipDirective['trigger'] {
    return this.calculated ? 'hover' : null;
  }

  constructor(private contextService: DashboardIndexContextService) {}

}
