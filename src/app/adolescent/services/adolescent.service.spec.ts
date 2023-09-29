import { TestBed } from '@angular/core/testing';

import { AdolescentService } from './adolescent.service';

describe('AdolescentService', () => {
  let service: AdolescentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdolescentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
