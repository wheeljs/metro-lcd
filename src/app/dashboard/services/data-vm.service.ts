import { Injectable } from '@angular/core';
import { type Observable, forkJoin, map, shareReplay, switchMap, from } from 'rxjs';
import { liveQuery } from 'dexie';

import { Db } from './db';
import { DataService } from '.';
import type { LoadDataOptions } from '../types';
import { prevRangeId, toVM } from './vm';

@Injectable()
export class DataVMService {
  private syncing = false;

  private db: Db;

  private manifest$ = this.fileService.list().pipe(
    switchMap((manifest) =>
      forkJoin(
        manifest.map((x) =>
          this.fileService.getData({
            range: x.id!,
            hash: x.hash,
          }).pipe(
            map((data) => ({
              ...data,
              hash: x.hash,
            })),
          ),
        ),
      ),
    ),
    shareReplay(1),
  );

  constructor(private fileService: DataService) {
    this.db = new Db();
    this.db.on('populate', () => this.syncWithManifest(true));
    this.syncWithManifest();
  }

  syncWithManifest(initialize = false) {
    if (this.syncing) {
      return;
    }
    this.syncing = true;
    this.manifest$.subscribe({
      next: async (fetchedData) => {
        if (initialize) {
          this.db.data.bulkAdd(fetchedData);
          return;
        }

        const dataIds = fetchedData.map(x => x.id!);
        const freshDataIds = (await this.db.data.where('id')
          .anyOf(dataIds)
          .filter((dbData) => dbData.hash === fetchedData.find(x => x.id === dbData.id)?.hash)
          .toArray()).map(x => x.id);
        const newData = fetchedData.filter(x => !freshDataIds.includes(x.id));
        if (newData.length > 0) {
          this.db.data.bulkPut(newData);
        }
      },
      complete: () => this.syncing = false,
    });
  }

  getData(options: LoadDataOptions) {
    return liveQuery(
      () => this.db.data.where({ id: options.range }).first()
    );
  }

  getDataVM(options: LoadDataOptions): Observable<any> {
    const prevMonthRanges = [];
    let prevRange = options.range;
    for (let i = 0; i < 5; i++) {
      prevRange = prevRangeId(prevRange, 'month');
      prevMonthRanges.push(prevRange);
    }

    const lastYearRange = prevRangeId(options.range, 'year');
    const rangeIds = [
      options.range,
      ...prevMonthRanges,
      lastYearRange,
    ];
    const notLastMonthsRanges = [options.range, lastYearRange];

    return from(
      liveQuery(() => this.db.data.where('id').anyOf(rangeIds).reverse().toArray())
    ).pipe(
      map((rangeData) => {
        const current = rangeData.find(x => x.id === options.range);
        if (current == null) {
          return null;
        }

        const lastMonths = rangeData.filter(x => !notLastMonthsRanges.includes(x.id!));
        const lastYear = rangeData.find(x => x.id === lastYearRange);
        return toVM({
          current,
          lastMonth: lastMonths,
          lastYear,
        });
      }),
    );
  }
}
