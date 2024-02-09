import { Inject, Injectable } from '@angular/core';

import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  // Unique key for LocalStorage
  private userCache = 'userCache';
  private repoCache = 'repoCache';

  constructor(
    private apiService: ApiService,
    @Inject(LOCAL_STORAGE) private storage: StorageService
  ) {}

  modifyUserData(githubUsername: string) {
    this.storage.set(this.userCache, githubUsername);
    this.apiService
      .getRepos(githubUsername, 1, 10)
      .subscribe((data: any = []) => {
        this.storage.set(this.repoCache, data);
      });
  }
}
