import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private router: Router) {}

  // Search method gets trigged everytime user enter a valid string, it then populate search text to profile-page component
  searchText: string = '';
  search() {
    if (this.searchText.trim()) {
      this.router.navigate(['/profile'], {
        queryParams: { username: this.searchText.trim() },
      });
    }
  }
}
