import { Pipe, PipeTransform, TemplateRef } from '@angular/core';

@Pipe({
  name: 'withValue',
})
export class WithValuePipe implements PipeTransform {

  /**
   * 筛选掉vars中对应位置为falsy的值
   *
   * @param value
   * @param vars
   * @returns
   */
  transform<T = TemplateRef<unknown>>(value: T[], vars: unknown[]): T[] {
    return value.filter((_, index) => {
      const cond = vars[index];
      if (Array.isArray(cond)) {
        return cond.some((x) => Boolean(x));
      }
      return Boolean(cond);
    });
  }

}
