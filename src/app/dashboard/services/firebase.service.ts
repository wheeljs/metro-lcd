import { Injectable } from '@angular/core';
import { Observable, from, map, throwError } from 'rxjs';
import { CollectionReference, DocumentData, Firestore, collection, collectionData, getDocs, orderBy, query, where } from '@angular/fire/firestore';
import { environment } from '../../../environments/environment';
import type { DashboardData, LoadDataOptions } from '../types';

const RangeRegEx = /^(\d{4})-(\d{1,2})$/;

@Injectable()
export class FirebaseService {
  collection: CollectionReference<DashboardData>;

  constructor(private firestore: Firestore) {
    if (!environment.firestore) {
      throw new Error(`can not connect to firestore`);
    }

    this.collection = collection(this.firestore, environment.firestore.collectionName!) as CollectionReference<DashboardData>;
  }

  list(): Observable<DashboardData[]> {
    return collectionData(query(this.collection, orderBy('createdAt', 'desc')));
  }

  getData(options: LoadDataOptions): Observable<DashboardData | null> {
    const { range } = options;
    if (!range) {
     return throwError(() => new Error('should specify a range to get'));
    }

    const matched = range.match(RangeRegEx);
    if (!matched) {
     return throwError(() => new Error(`range invalid, should use 'yyyy-m', got ${range}`));
    }

    const [, year, month] = matched;
    const queryCommand = query<DashboardData, DocumentData>(
      this.collection,
      where('year', '==', Number.parseInt(year)),
      where('month', '==', Number.parseInt(month)),
    );
    return from(getDocs(queryCommand)).pipe(
      map(snapshots => {
        if (snapshots.empty) {
          return null;
        }
        if (snapshots.size > 1) {
          throw new Error(`specified range ${range} contains more than one record`);
        }

        return {
          id: snapshots.docs[0].id,
          ...snapshots.docs[0].data(),
        } satisfies DashboardData;
      }),
    );
  }
}
