import { Observable } from 'rxjs';
import type { LoadDataOptions, DashboardData } from '../types';

export abstract class DataService {
  abstract list(): Observable<DashboardData[]>;

  abstract getData(options: LoadDataOptions): Observable<DashboardData>;
}
