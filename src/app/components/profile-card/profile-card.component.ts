import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss'],
})
export class ProfileCardComponent {
  constructor(private apiService: ApiService) {}

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

  ngOnInit() {
    this.apiService.getUser('Swarnendu0123').subscribe((data) => {
      this.userName = data.name;
      this.userBio = data.bio === null ? 'NA' : data.bio;
      this.userLocation = data.location === null ? 'NA' : data.location;
      this.twitterHandle =
        data.twitter_username === null ? 'NA' : data.twitter_username;
      this.emailId = data.email === null ? 'NA' : data.email;
      this.gitHubHandle = data.html_url;
      this.followers = data.followers;
      this.following = data.following;
      this.profileImg = data.avatar_url;
    });
  }
}
