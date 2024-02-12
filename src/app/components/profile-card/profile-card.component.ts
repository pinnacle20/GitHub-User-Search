import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() githubUsername = '';
  // @Output() handleInvalidUser: EventEmitter<boolean> =
  // new EventEmitter<boolean>();

  userFound = true;

  constructor(
    private apiService: ApiService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['githubUsername']) {
      if (this.githubUsername != '') this.getUserDetails();
    }
  }

  respo: any[] = [];

  profileImg = '';
  userName = '';
  userBio = '';
  userLocation = '';
  gitHubHandle = '';
  twitterHandle = '';
  emailId = '';
  followers = '';
  following = '';

  getUserDetails() {
    console.log('profile card ', this.githubUsername);
    this.apiService.getUser(this.githubUsername).subscribe(
      (data) => {
        console.log(data);
        this.cdr.detectChanges();
        // this.handleInvalidUser.emit(this.userFound);
        this.userName = this.githubUsername;
        this.userBio = data.bio === null ? 'No description' : data.bio;
        this.userLocation =
          data.location === null ? 'Not available' : data.location;
        this.twitterHandle =
          data.twitter_username === null
            ? 'Not mentioned'
            : data.twitter_username;
        this.emailId = data.email === null ? 'Not mentioned' : data.email;
        this.gitHubHandle = data.html_url;
        this.followers = data.followers;
        this.following = data.following;
        this.profileImg = data.avatar_url;
      },
      (error) => {
        console.error('Error fetching user details:', error);
        // this.handleInvalidUser.emit(this.userFound);
        this.router.navigate(['/error'], {
          queryParams: { error: error.error.message },
        });
      }
    );
  }
}
