import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  constructor(private apiService: ApiService) {}

  repository: any[] = [];

  ngOnInit(): void {}

  githubUsername = '';
  search(searchText: string) {
    console.log('Input received ', searchText);
    this.githubUsername = searchText;
    this.apiService
      .getRepos(this.githubUsername, 1, this.pageSize)
      .subscribe((data: any = []) => {
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
    this.apiService
      .getRepos(this.githubUsername, event.pageIndex + 1, event.pageSize)
      .subscribe((data: any = []) => {
        this.repository = data;
      });
  }
}
