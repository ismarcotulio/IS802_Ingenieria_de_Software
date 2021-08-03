import { TestBed } from '@angular/core/testing';

import { CommentToSellerService } from './comment-to-seller.service';

describe('CommentToSellerService', () => {
  let service: CommentToSellerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommentToSellerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
