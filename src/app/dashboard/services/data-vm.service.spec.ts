import { TestBed } from '@angular/core/testing';

import { DataVMService } from './data-vm.service';

describe('DataVMService', () => {
  let service: DataVMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataVMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
