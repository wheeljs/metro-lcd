import Dexie, { type Table } from 'dexie';
import type { DashboardData } from '../types';

export class Db extends Dexie {
  data!: Table<DashboardData, string>;

  constructor(dbName = 'dashboard') {
    super(dbName);
    this.version(1).stores({
      data: '&id',
    });
  }
}
