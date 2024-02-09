import {
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
})
export class ProfilePageComponent {
  repository: any[] = [];
  githubUsername = '';

  // Unique key for LocalStorage
  private userCache = 'userCache';
  private repoCache = 'repoCache';

  constructor(
    private apiService: ApiService,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {
    const userData = this.storage.get(this.userCache);
    if (userData) {
      this.githubUsername = userData;
    }
    const repoData = this.storage.get(this.repoCache);
    if (repoData) {
      this.repository = repoData;
    }
  }

  ngOnInit(): void {}

  search(searchText: string) {
    if (searchText != '') {
      this.githubUsername = searchText;
      this.storage.set(this.userCache, this.githubUsername);
      this.apiService
        .getRepos(this.githubUsername, 1, this.pageSize)
        .subscribe((data: any = []) => {
          this.repository = data;
          this.storage.set(this.repoCache, this.repository);
        });
    }
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
