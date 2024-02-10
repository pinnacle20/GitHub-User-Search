import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent implements OnChanges {
  @Input() githubUsername = '';

  constructor(private apiService: ApiService) {}

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
    this.apiService.getUser(this.githubUsername).subscribe(
      (data) => {
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
      }
    );
  }
}
