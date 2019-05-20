import { TestBed } from '@angular/core/testing';

import { MessionService } from './mession.service';

describe('MessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MessionService = TestBed.get(MessionService);
    expect(service).toBeTruthy();
  });
});
