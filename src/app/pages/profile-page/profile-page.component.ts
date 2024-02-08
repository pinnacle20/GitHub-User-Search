import { Component } from '@angular/core';
import { TitleStrategy } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.scss']
})
export class ProfilePageComponent {
  constructor(private apiService: ApiService) {}
  
  respo: any[] = [];

  profileImg  = '';
  userName = '';
  userBio = '';
  userLocation = '';
  gitHubHandle = '';
  twitterHandle = '';
  emailId = '';
  followers = '';
  following = '';

  ngOnInit() {
    this.apiService.getUser('Swarnendu0123').subscribe((data)=>{
      console.log(data)
      this.userName = data.name;
      this.userBio = (data.bio===null)?'NA':data.bio;
      this.userLocation =(data.location===null)?'NA':data.location;
      this.twitterHandle = (data.twitter_username===null)?'NA':data.twitter_username ;
      this.emailId = (data.email===null)?'NA':data.email ;
      this.gitHubHandle = data.html_url;
      this.followers = data.followers;
      this.following = data.following;
      this.profileImg = data.avatar_url;
    });
  }

}
