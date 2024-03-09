import { TestBed } from '@angular/core/testing';

import { RunningLineService } from './running-line.service';

describe('RunningLineService', () => {
  let service: RunningLineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RunningLineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
