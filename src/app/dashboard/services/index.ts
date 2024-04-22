import { Observable } from 'rxjs';
import type { LoadDataOptions, DashboardData, DashboardDataVM } from '../types';

export abstract class DataService {
  abstract list(): Observable<DashboardData[]>;

  abstract getData(options: LoadDataOptions): Observable<DashboardData>;

  abstract getDataVM(options: LoadDataOptions): Observable<DashboardDataVM>;
}
