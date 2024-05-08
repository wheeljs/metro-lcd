import { TestBed } from '@angular/core/testing';

import { DashboardIndexContextService } from './dashboard-index-context.service';

describe('DashboardIndexContextService', () => {
  let service: DashboardIndexContextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardIndexContextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
