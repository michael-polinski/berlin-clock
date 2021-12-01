import { TestBed } from '@angular/core/testing';

import { DateProviderService } from './date-provider.service';

/**
 * TODO
 */
describe('DateProviderService', () => {
  let service: DateProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
