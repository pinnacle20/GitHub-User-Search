import { TestBed } from '@angular/core/testing';

import { ApiCacheInterceptorService } from './api-cache-interceptor.service';

describe('ApiCacheInterceptorService', () => {
  let service: ApiCacheInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCacheInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
