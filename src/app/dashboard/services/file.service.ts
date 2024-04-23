import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { type Observable, of, tap, map, catchError, forkJoin } from 'rxjs';

import { STORAGE } from '../../common';
import type { DashboardData, DashboardDataVM, LoadDataOptions } from '../types';
import { prevRangeId, toVM } from './vm';

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

  getDataVM(options: LoadDataOptions): Observable<DashboardDataVM> {
    const { range } = options;
    const prevMonthRange = prevRangeId(range, 'month');
    const prevYearRange = prevRangeId(range, 'year');
    return forkJoin({
      current: this.getData(options),
      lastMonth: this.getData({ range: prevMonthRange }).pipe(catchError(() => of(undefined))),
      lastYear: this.getData({ range: prevYearRange }).pipe(catchError(() => of(undefined))),
    }).pipe(
      map((result) => toVM(result)),
    );
  }
}
