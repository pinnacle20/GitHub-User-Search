import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private router: Router) {}

  searchText: string = '';
  search() {
    this.router.navigate(['/profile'], {
      queryParams: { username: this.searchText },
    });
  }
}
