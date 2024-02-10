import { TestBed } from '@angular/core/testing';

import { MatPaginatorIntExtService } from './mat-paginator-int-ext.service';

describe('MatPaginatorIntExtService', () => {
  let service: MatPaginatorIntExtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MatPaginatorIntExtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
