import { TestBed } from '@angular/core/testing';

import { DALService } from './dal.service';

describe('DALService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DALService = TestBed.get(DALService);
    expect(service).toBeTruthy();
  });
});
