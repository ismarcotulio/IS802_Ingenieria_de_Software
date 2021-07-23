import { TestBed } from '@angular/core/testing';

import { PostAdService } from './post-ad.service';

describe('PostAdService', () => {
  let service: PostAdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostAdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
