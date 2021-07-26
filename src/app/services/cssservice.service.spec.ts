import { TestBed } from '@angular/core/testing';

import { CssserviceService } from './cssservice.service';

describe('CssserviceService', () => {
  let service: CssserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CssserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
