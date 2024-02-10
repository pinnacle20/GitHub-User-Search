import { Injectable } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Injectable({
  providedIn: 'root',
})
export class MatPaginatorIntExtService extends MatPaginatorIntl {
  override getRangeLabel = (page: number, pageSize: number, length: number) => {
    const startIndex = page * pageSize;
    const endIndex = (page + 1) * pageSize;
    return startIndex + 1 + ' - ' + endIndex;
  };
}
