import type { DashboardData, DashboardDataVM, MonthCompare } from '../types';

export function prevRangeId(id: string, step: 'month' | 'year'): string {
  const matched = id.split('-');
  if (!matched?.length) {
    throw new Error(`range not valid, need id like '2024-2', got ${id}`);
  }

  const year = Number.parseInt(matched[0]);
  const month = Number.parseInt(matched[1]);
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

export function toVM({ current, lastMonth, lastYear }: {
  current: DashboardData;
  lastMonth?: DashboardData | (DashboardData[]);
  lastYear?: DashboardData;
}): DashboardDataVM {
  const vm: Partial<DashboardDataVM> = { ...current };
  const lastMonths = Array.isArray(lastMonth) ? lastMonth : [lastMonth!];

  vm.monthCompare = [];
  if (lastMonths.length >= 3) {
    for (const month of lastMonths) {
      const monthCompareItem: MonthCompare = {
        id: month.id!,
        passengerCapacity: month.passengerCapacity?.value,
        inStationCapacity: month.inStationCapacity,
      };
      if (month.passengerStrong.value) {
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

  if (current.passengerStrong.value == null) {
    current.passengerStrong.value = Number.parseFloat(
      (current.passengerCapacity.value / current.operationLength / current.days / 10000).toFixed(3)
    );
  }

  const prevMonth = lastMonths?.[0];
  if (current.inStationCapacity && prevMonth?.inStationCapacity) {
    const compareLastMonth = current.inStationCapacity - prevMonth.inStationCapacity;
    vm.inStationCapacityVM = {
      value: current.inStationCapacity,
      compareLastMonth,
      compareLastMonthPercent: compareLastMonth / prevMonth.inStationCapacity,
    };
  }

  vm.passengerStrongVM = { ...current.passengerStrong };
  if (prevMonth?.passengerStrong?.value) {
    const compareLastMonth = (current.passengerStrong.value * 1000) - (prevMonth.passengerStrong.value * 1000);
    Object.assign(vm.passengerStrongVM, {
      compareLastMonth: compareLastMonth / 1000,
      compareLastMonthPercent: current.passengerStrong.compareLastMonthPercent ?? (compareLastMonth / (prevMonth.passengerStrong.value * 1000)),
    });
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
