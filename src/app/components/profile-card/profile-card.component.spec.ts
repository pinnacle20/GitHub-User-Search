import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';

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

});
