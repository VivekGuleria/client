import { TestBed } from '@angular/core/testing';

import { ComplainceServiceService } from './complaince-service.service';

describe('ComplainceServiceService', () => {
  let service: ComplainceServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComplainceServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
