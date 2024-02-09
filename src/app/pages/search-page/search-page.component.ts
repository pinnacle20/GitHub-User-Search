import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { SharedDataService } from 'src/app/services/shared-data.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
})
export class SearchPageComponent {
  constructor(private router: Router, private sharedData: SharedDataService) {}

  search(githubUsername: string) {
    console.log(githubUsername);
    this.sharedData.modifyUserData(githubUsername);
    this.router.navigate(['/profile']);
  }
}
