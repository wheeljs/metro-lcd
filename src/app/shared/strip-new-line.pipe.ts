import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stripNewLine',
  standalone: false,
})
export class StripNewLinePipe implements PipeTransform {
  transform(value: string): string {
    return value?.replace(/\<br\/?\>/g, ' ');
  }
}
