import { Pipe, PipeTransform } from '@angular/core';
import type { NameItem } from './types';

@Pipe({
  name: 'lineName',
})
export class LineNamePipe implements PipeTransform {
  transform(value: NameItem): string {
    if (!value || !value.main) {
      return '';
    }

    const { prefix, main, suffix } = value;
    return [prefix, main, suffix].filter((x) => x).join('');
  }
}
