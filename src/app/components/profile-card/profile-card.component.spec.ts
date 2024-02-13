import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { ProfileCardComponent } from './profile-card.component';
import { ApiService } from 'src/app/services/api.service';
import { SimpleChanges } from '@angular/core';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Router } from '@angular/router';

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;
  let apiService: ApiService;
  let router: Router;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCardComponent],
      imports: [HttpClientModule, HttpClientTestingModule, RouterTestingModule],
      providers: [ApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    router = TestBed.inject(Router);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  // Test cases to cover ngOnChanges

  it('should call getUserDetails if githubUsername is not empty on changes', () => {
    spyOn(apiService, 'getUser').and.returnValue(of({}));
    component.githubUsername = 'someUsername';
    component.ngOnChanges({
      githubUsername: {} as any,
    });
    expect(apiService.getUser).toHaveBeenCalledWith('someUsername');
  });

  it('should not call getUserDetails if githubUsername is empty on changes', () => {
    spyOn(apiService, 'getUser');
    component.githubUsername = '';
    component.ngOnChanges({ githubUsername: {} as any });
    expect(apiService.getUser).not.toHaveBeenCalled();
  });

  it('should not call getUserDetails if no changes happens in githubUsername', () => {
    spyOn(apiService, 'getUser');
    component.ngOnChanges({});
    expect(apiService.getUser).not.toHaveBeenCalled();
  });

  // Test cases to cover getUserDetails()
  it('should set user details on successful API call', () => {
    const userData = {
      login: 'testUser',
      bio: 'This is a test bio',
      location: 'Test City',
      twitter_username: 'test_twitter',
      email: 'test@example.com',
      html_url: 'https://github.com/testUser',
      followers: '10',
      following: '5',
      avatar_url: 'https://example.com/avatar.jpg',
      public_repos: 20,
    };

    spyOn(apiService, 'getUser').and.returnValue(of(userData));
    spyOn(apiService.resposityCount, 'next');
    spyOn(router, 'navigate');

    component.githubUsername = 'testUser';
    component.getUserDetails();

    expect(apiService.getUser).toHaveBeenCalledWith('testUser');
    expect(apiService.resposityCount.next).toHaveBeenCalledWith(
      userData.public_repos
    );
    expect(component.userName).toBe('testUser');
    expect(component.userBio).toBe('This is a test bio');
    expect(component.userLocation).toBe('Test City');
    expect(component.twitterHandle).toBe('test_twitter');
    expect(component.emailId).toBe('test@example.com');
    expect(component.gitHubHandle).toBe('https://github.com/testUser');
    expect(component.followers).toBe('10');
    expect(component.following).toBe('5');
    expect(component.profileImg).toBe('https://example.com/avatar.jpg');
    expect(router.navigate).not.toHaveBeenCalled();
  });

  it('should handle error during API call and navigate to error page', () => {
    const errorResponse = {
      error: {
        message: 'Error fetching user details',
      },
    };

    spyOn(apiService, 'getUser').and.returnValue(throwError(errorResponse));
    spyOn(router, 'navigate');

    component.githubUsername = 'someUsername';
    component.getUserDetails();

    expect(apiService.getUser).toHaveBeenCalledWith('someUsername');
    expect(router.navigate).toHaveBeenCalledWith(['/error'], {
      queryParams: { error: 'Error fetching user details' },
    });
  });

  it('should set empty values for user details if API response is empty', () => {
    const emptyUserData = {};
    spyOn(apiService, 'getUser').and.returnValue(of(emptyUserData));

    component.githubUsername = 'emptyUser';
    component.getUserDetails();

    expect(component.userName).toBe('');
    expect(component.userBio).toBe('No description');
    expect(component.userLocation).toBe('Not available');
    expect(component.twitterHandle).toBe('Not mentioned');
    expect(component.emailId).toBe('Not mentioned');
    expect(component.gitHubHandle).toBe('');
    expect(component.followers).toBe('');
    expect(component.following).toBe('');
    expect(component.profileImg).toBe('');
  });
});
