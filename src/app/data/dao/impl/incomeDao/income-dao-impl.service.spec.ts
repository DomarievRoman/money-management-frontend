import { TestBed } from '@angular/core/testing';

import { IncomeDaoImplService } from './income-dao-impl.service';

describe('IncomeDaoImplService', () => {
  let service: IncomeDaoImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IncomeDaoImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
