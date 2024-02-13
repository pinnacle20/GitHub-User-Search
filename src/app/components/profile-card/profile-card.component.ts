import {
  ChangeDetectorRef,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  @Input() githubUsername = '';

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['githubUsername']) {
      if (this.githubUsername != '') this.getUserDetails();
    }
  }

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
    this.apiService.getUser(this.githubUsername).subscribe(
      (data) => {
        this.apiService.resposityCount.next(data.public_repos);
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
        this.router.navigate(['/error'], {
          queryParams: { error: error.error.message },
        });
      }
    );
  }
}
