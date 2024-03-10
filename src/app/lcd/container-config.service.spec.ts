import { TestBed } from '@angular/core/testing';

import { ContainerConfigService } from './container-config.service';

describe('ContainerConfigService', () => {
  let service: ContainerConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContainerConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
