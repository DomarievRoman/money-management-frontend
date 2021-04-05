import { TestBed } from '@angular/core/testing';

import { CostsDaoImplService } from './costs-dao-impl.service';

describe('CostsDaoImplService', () => {
  let service: CostsDaoImplService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CostsDaoImplService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
