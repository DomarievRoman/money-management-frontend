import { TestBed } from '@angular/core/testing';

import { CashbookDaoImplService } from './cashbook-dao-impl.service';

describe('CashbookDaoImplService', () => {
  let service: CashbookDaoImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashbookDaoImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
