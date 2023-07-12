import { TestBed } from '@angular/core/testing';

import { TimeoutserviceService } from './timeoutservice.service';

describe('TimeoutserviceService', () => {
  let service: TimeoutserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeoutserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
