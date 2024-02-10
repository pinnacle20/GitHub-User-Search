import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ActivatedRoute, Router, TitleStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { LoaderService } from 'src/app/services/loader.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProfilePageComponent implements OnInit {
  repository: any[] = [];
  githubUsername = '';

  // Unique key for LocalStorage
  private userCache = 'userCache';
  private repoCache = 'repoCache';

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    public loader: LoaderService,
    private cdr: ChangeDetectorRef, 
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  ngOnInit(): void {
    this.githubUsername = this.storage.get(this.userCache) || '';
    this.repository = this.storage.get(this.repoCache) || [];

    this.route.queryParams.subscribe((params) => {
      if (params['username']) this.modifyUserData(params['username']);
    });
  }

  search(searchText: string) {
    if (searchText != '') {
      console.log('searched ', searchText);
      this.modifyUserData(searchText);
    }
  }

  modifyUserData(githubUsername: string) {
    this.storage.set(this.userCache, githubUsername);
    this.cdr.detectChanges();
    this.apiService
      .getRepos(githubUsername, 1, 10)
      .subscribe((data: any = []) => {
        this.storage.set(this.repoCache, data);
        this.githubUsername = githubUsername;
        this.repository = data;
      });
  }

  // Pagination
  pageSize = 10;
  pageSizeOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  length: number = 100;
  PaginationOption: boolean = false;

  OnPageChange(event: PageEvent) {
    console.log(event);
    this.pageSize = event.pageSize;
    this.apiService
      .getRepos(this.githubUsername, event.pageIndex + 1, event.pageSize)
      .subscribe((data: any = []) => {
        this.repository = data;
      });
  }
}
