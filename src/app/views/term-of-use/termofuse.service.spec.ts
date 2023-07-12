import { TestBed } from '@angular/core/testing';

import { TermofuseService } from './termofuse.service';

describe('TermofuseService', () => {
  let service: TermofuseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TermofuseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
