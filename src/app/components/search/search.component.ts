import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  @Output() searchEmit: EventEmitter<string> = new EventEmitter();

  searchText: string = '';
  search() {
    this.searchEmit.emit(this.searchText);
  }
}
