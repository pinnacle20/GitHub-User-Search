import { Component, OnInit } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent implements OnInit {
  constructor(private apiService: ApiService) {}

  repository: any[] = [];

  ngOnInit(): void {
    this.apiService
      .getRepos('Swarnendu0123', 1, 10)
      .subscribe((data: any = []) => {
        console.log('Started -', data);
        this.repository = data;
      });
  }

  // Pagination
  allProducts: any[] = [];
  activeProducts: any[] = [];
  pageSize = 10;
  pageSizeOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  length: number = 100;
  PaginationOption: boolean = false;

  OnPageChange(event: PageEvent) {
    console.log(event);
    this.pageSize = event.pageSize;
    let startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.allProducts.length) {
      endIndex = this.allProducts.length;
    }
    console.log('Start Index - ', event.pageIndex + 1);
    this.apiService
      .getRepos('Swarnendu0123', event.pageIndex + 1, this.pageSize)
      .subscribe((data: any = []) => {
        this.repository = data;
      });

    this.activeProducts = this.allProducts.slice(startIndex, endIndex);
  }
}
