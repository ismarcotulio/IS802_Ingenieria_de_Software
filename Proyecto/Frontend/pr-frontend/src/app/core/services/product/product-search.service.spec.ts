import { TestBed } from '@angular/core/testing';

import { ProductSearchService } from './product-search.service';

describe('ProductSearchService', () => {
  let service: ProductSearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductSearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
