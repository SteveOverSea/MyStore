import { TestBed } from '@angular/core/testing';

import { ProductsFetchService } from './products-fetch.service';

describe('ProductsFetchService', () => {
  let service: ProductsFetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductsFetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
