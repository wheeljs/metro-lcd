import type { DashboardData, DashboardDataVM, MonthCompare, ValueComparePercent } from '../types';

export function prevRangeId(id: string, step: 'month' | 'year'): string {
  const matched = id.match(/(\d{4})-(\d{1,2})/);
  if (!matched?.length) {
    throw new Error(`range not valid, need id like '2024-2', got ${id}`);
  }

  const year = Number.parseInt(matched[1]);
  const month = Number.parseInt(matched[2]);
  if (step === 'year') {
    return `${year - 1}-${month}`;
  }

  let prevMonth = month - 1;
  let prevYear = year;
  if (prevMonth <= 0) {
    prevMonth = prevMonth = 12;
    prevYear -= 1;
  }
  return `${prevYear}-${prevMonth}`;
}

type PrecisionNumber = [number, number];

function fromPrecisionNumber(...[num, multiple]: PrecisionNumber): number {
  return num / multiple;
}

function toPrecisionNumber(num: number, multiple = 1): PrecisionNumber {
  const value = num * multiple;
  if (value % 1 !== 0) {
    return toPrecisionNumber(num, multiple * 10);
  }

  return [value, multiple];
}

function calcCompare(currentValue: number, previousValue: number): [number, number] {
  const [curVal, multiple] = toPrecisionNumber(currentValue);
  const prevVal = previousValue * multiple;

  const diffValue = curVal - prevVal;
  const diffPercent = diffValue / prevVal;

  return [fromPrecisionNumber(diffValue, multiple), diffPercent];
}

export function toVM({ current, lastMonth, lastYear }: {
  current: DashboardData;
  lastMonth?: DashboardData | (DashboardData[]);
  lastYear?: DashboardData;
}): DashboardDataVM {
  const vm: Partial<DashboardDataVM> & Pick<DashboardDataVM, 'monthCompare' | 'calculatedFields'> = {
    ...current,
    monthCompare: [],
    calculatedFields: [],
  };
  const lastMonths = Array.isArray(lastMonth) ? lastMonth : [lastMonth!];

  if (lastMonths.length >= 3) {
    for (const month of lastMonths) {
      const monthCompareItem: MonthCompare = {
        id: month.id!,
        passengerCapacity: month.passengerCapacity?.value,
        inStationCapacity: month.inStationCapacity,
      };
      if (month.passengerStrong?.value) {
        monthCompareItem.passengerStrong = month.passengerStrong.value;
      }

      vm.monthCompare.push(monthCompareItem);

      if (Array.isArray(vm.cities) && Array.isArray(month.cities)) {
        month.cities.forEach((city) => {
          const vmCity = vm.cities!.find((x) => x.city === city.city);
          if (!vmCity) {
            return;
          }

          if (!Array.isArray(vmCity.history)) {
            vmCity.drilldownable = true;
            vmCity.history = [{
              ...vmCity,
              range: current.id,
            }];
          }

          vmCity.history.push({
            ...city,
            range: month.id,
          });
        });
      }
    }
  }

  if (!current.passengerStrong?.value) {
    if (!current.passengerStrong) {
      current.passengerStrong = {} as ValueComparePercent;
    }
    current.passengerStrong.value = Number.parseFloat(
      (current.passengerCapacity.value / current.operationLength / current.days / 10000).toFixed(3)
    );
    vm.calculatedFields.push('passengerStrongVM.value');
  }

  const prevMonth = lastMonths?.[0];
  if (current.inStationCapacity) {
    vm.inStationCapacityVM = {
      value: current.inStationCapacity,
    };

    let compareLastMonth;
    if (prevMonth?.inStationCapacity) {
      const [diff, percent] = calcCompare(current.inStationCapacity, prevMonth.inStationCapacity);
      compareLastMonth = {
        compareLastMonth: diff,
        compareLastMonthPercent: percent,
      };
      vm.calculatedFields.push(
        'inStationCapacityVM.compareLastMonth',
        'inStationCapacityVM.compareLastMonthPercent'
      );
    }

    let compareLastYear;
    if (lastYear?.inStationCapacity) {
      const [diff, percent] = calcCompare(current.inStationCapacity, lastYear.inStationCapacity);
      compareLastYear = {
        compareLastYear: diff,
        compareLastYearPercent: percent,
      };
      vm.calculatedFields.push(
        'inStationCapacityVM.compareLastYear',
        'inStationCapacityVM.compareLastYearPercent'
      );
    }

    Object.assign(vm.inStationCapacityVM, ...[compareLastMonth, compareLastYear].filter(x => x != null));
  }

  vm.passengerStrongVM = { ...current.passengerStrong };
  if (prevMonth?.passengerStrong?.value) {
    const [diff, percent] = calcCompare(current.passengerStrong.value, prevMonth.passengerStrong.value);
    Object.assign(vm.passengerStrongVM, {
      compareLastMonth: diff,
      compareLastMonthPercent: current.passengerStrong.compareLastMonthPercent ?? percent,
    });
    vm.calculatedFields.push('passengerStrongVM.compareLastMonth');
    if (current.passengerStrong.compareLastMonthPercent == null) {
      vm.calculatedFields.push('passengerStrongVM.compareLastMonthPercent');
    }
  }
  if (lastYear?.passengerStrong?.value) {
    const [diff, percent] = calcCompare(current.passengerStrong.value, lastYear.passengerStrong.value);
    Object.assign(vm.passengerStrongVM, {
      compareLastYear: diff,
      compareLastYearPercent: current.passengerStrong.compareLastYearPercent ?? percent,
    });
    vm.calculatedFields.push('passengerStrongVM.compareLastYear');
    if (current.passengerStrong.compareLastYearPercent == null) {
      vm.calculatedFields.push('passengerStrongVM.compareLastYearPercent');
    }
  }

  ['largeVolume', 'mediumVolume', 'smallVolume'].forEach((volumeKey) => {
    const volumeK = volumeKey as keyof Pick<DashboardData, 'largeVolume' | 'mediumVolume' | 'smallVolume'>;
    const currentVolume = current[volumeK];

    if (prevMonth?.[volumeK]) {
      const lastMonthVolume = prevMonth[volumeK];
      vm[`${volumeK}Compare`] = {
        lines: { compareLastMonth: currentVolume.lines - lastMonthVolume.lines },
        operationLength: { compareLastMonth: ((currentVolume.operationLength * 10) - (lastMonthVolume.operationLength * 10)) / 10 },
        passengerCapacity: { compareLastMonth: currentVolume.passengerCapacity - lastMonthVolume.passengerCapacity },
        inStationCapacity: { compareLastMonth: currentVolume.inStationCapacity - lastMonthVolume.inStationCapacity },
      };
    }
  });

  return vm as DashboardDataVM;
}
