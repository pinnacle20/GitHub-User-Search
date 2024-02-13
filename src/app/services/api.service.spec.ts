import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ApiService } from './api.service';

describe('ApiService', () => {
  let apiService: ApiService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    });
    apiService = TestBed.inject(ApiService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(apiService).toBeTruthy();
  });

  it('should get user details', () => {
    const mockUserData = { login: 'testUser', name: 'Test User' };
    const githubUsername = 'testUser';

    apiService.getUser(githubUsername).subscribe((userData) => {
      expect(userData).toEqual(mockUserData);
    });

    const req = httpTestingController.expectOne(
      `https://api.github.com/users/${githubUsername}`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(mockUserData);
  });

  it('should handle user details error', () => {
    const githubUsername = 'nonExistentUser';

    apiService.getUser(githubUsername).subscribe(
      () => fail('should not reach here'),
      (error) => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpTestingController.expectOne(
      `https://api.github.com/users/${githubUsername}`
    );
    expect(req.request.method).toEqual('GET');

    req.error(new ErrorEvent('HttpErrorResponse'));
  });

  it('should get user repositories', () => {
    const mockReposData = [{ name: 'repo1' }, { name: 'repo2' }];
    const githubUsername = 'testUser';
    const pageNo = 1;
    const perPage = 10;

    apiService
      .getRepos(githubUsername, pageNo, perPage)
      .subscribe((reposData) => {
        expect(reposData).toEqual(mockReposData);
      });

    const req = httpTestingController.expectOne(
      `https://api.github.com/users/${githubUsername}/repos?page=${pageNo}&per_page=${perPage}`
    );
    expect(req.request.method).toEqual('GET');

    req.flush(mockReposData);
  });

  it('should handle user repositories error', () => {
    const githubUsername = 'nonExistentUser';
    const pageNo = 1;
    const perPage = 10;

    apiService.getRepos(githubUsername, pageNo, perPage).subscribe(
      () => fail('should not reach here'),
      (error) => {
        expect(error).toBeTruthy();
      }
    );

    const req = httpTestingController.expectOne(
      `https://api.github.com/users/${githubUsername}/repos?page=${pageNo}&per_page=${perPage}`
    );
    expect(req.request.method).toEqual('GET');

    req.error(new ErrorEvent('HttpErrorResponse'));
  });
});
