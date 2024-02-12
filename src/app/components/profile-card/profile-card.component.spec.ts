import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';

import { ProfileCardComponent } from './profile-card.component';
import { ApiService } from 'src/app/services/api.service';
import { SimpleChanges } from '@angular/core';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProfileCardComponent', () => {
  let component: ProfileCardComponent;
  let fixture: ComponentFixture<ProfileCardComponent>;
  let apiService: ApiService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ProfileCardComponent],
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ApiService],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCardComponent);
    component = fixture.componentInstance;
    apiService = TestBed.inject(ApiService);
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

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

});
