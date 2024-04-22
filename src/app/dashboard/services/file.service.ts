import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Observable, of, tap, map, catchError, forkJoin } from 'rxjs';

import { STORAGE } from '../../common';
import type { DashboardData, DashboardDataVM, LoadDataOptions } from '../types';

@Injectable()
export class FileService {

  constructor(@Inject(STORAGE) private storage: Storage, private httpClient: HttpClient) { }

  list(): Observable<DashboardData[]> {
    return this.httpClient.get('assets/dashboard-manifest.json') as Observable<DashboardData[]>;
  }

  getData({ range, hash, skipCache }: LoadDataOptions): Observable<DashboardData> {
    if (!skipCache && range in this.storage) {
      const cachedData = JSON.parse(this.storage[range]);
      if (cachedData.hash === hash) {
        return of(cachedData.data);
      }

      this.storage.removeItem(range);
    }

    return (
      this.httpClient.get(`assets/dashboard-data/${range}.json`) as Observable<DashboardData>
    ).pipe(
      tap(data => {
        this.storage[range] = JSON.stringify({
          hash,
          data,
        });
      })
    );
  }

  private prevRangeId(id: string, step: 'month' | 'year'): string {
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

  private toVM({ current, lastMonth, lastYear }: {
    current: DashboardData;
    lastMonth?: DashboardData;
    lastYear?: DashboardData;
  }): DashboardDataVM {
    const vm: Partial<DashboardDataVM> = { ...current };
    if (current.passengerStrong.value == null) {
      current.passengerStrong.value = Number.parseFloat(
        (current.passengerCapacity.value / current.operationLength / current.days / 10000).toFixed(3)
      );
    }

    if (current.inStationCapacity && lastMonth?.inStationCapacity) {
      const compareLastMonth = current.inStationCapacity - lastMonth.inStationCapacity;
      vm.inStationCapacityVM = {
        value: current.inStationCapacity,
        compareLastMonth,
        compareLastMonthPercent: compareLastMonth / lastMonth.inStationCapacity,
      };
    }

    vm.passengerStrongVM = { ...current.passengerStrong };
    if (lastMonth?.passengerStrong?.value) {
      const compareLastMonth = (current.passengerStrong.value * 1000) - (lastMonth.passengerStrong.value * 1000);
      Object.assign(vm.passengerStrongVM, {
        compareLastMonth: compareLastMonth / 1000,
        compareLastMonthPercent: current.passengerStrong.compareLastMonthPercent ?? (compareLastMonth / (lastMonth.passengerStrong.value * 1000)),
      });
    }

    ['largeVolume', 'mediumVolume', 'smallVolume'].forEach((volumeKey) => {
      const volumeK = volumeKey as keyof Pick<DashboardData, 'largeVolume' | 'mediumVolume' | 'smallVolume'>;
      const currentVolume = current[volumeK];

      if (lastMonth?.[volumeK]) {
        const lastMonthVolume = lastMonth[volumeK];
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

  getDataVM(options: LoadDataOptions): Observable<DashboardDataVM> {
    const { range } = options;
    const prevMonthRange = this.prevRangeId(range, 'month');
    const prevYearRange = this.prevRangeId(range, 'year');
    return forkJoin({
      current: this.getData(options),
      lastMonth: this.getData({ range: prevMonthRange }).pipe(catchError(() => of(undefined))),
      lastYear: this.getData({ range: prevYearRange }).pipe(catchError(() => of(undefined))),
    }).pipe(
      map((result) => this.toVM(result)),
    );
  }
}
