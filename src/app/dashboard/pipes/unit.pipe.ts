import { Pipe, PipeTransform } from '@angular/core';

export const Units = {
  '亿': 1e8,
  '万': 1e4,
};

export function formatUnit(value: number | undefined, unit?: keyof typeof Units): number | undefined {
  if (!value || !unit) {
    return value;
  }

  return value / (Units[unit] ?? 1);
}

@Pipe({
  name: 'unit'
})
export class UnitPipe implements PipeTransform {

  transform = formatUnit;

}
