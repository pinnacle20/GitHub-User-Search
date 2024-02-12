import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Route, Router, TitleStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { PageEvent } from '@angular/material/paginator';

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
  userFound = true;

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
    private router: Router,
    public loader: LoaderService
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      if (params['username']) this.modifyUserData(params['username']);
    });
  }

  modifyUserData(githubUsername: string) {
    this.githubUsername = githubUsername;
    if (this.userFound) {
      this.apiService.getRepos(githubUsername, 1, 10).subscribe(
        (data: any = []) => {
          this.githubUsername = githubUsername;
          this.repository = data;
        },
        (error) => {
          console.error('Error fetching repositories', error);
          this.router.navigate(['/error'], {
            queryParams: { error: error.error.message },
          });
        }
      );
    }
  }

  errorHandle(isValid: boolean) {
    this.userFound = isValid;
  }

  // Pagination
  pageSize = 10;
  pageSizeOptions = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
  length: number = 500;
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
