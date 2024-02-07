import { Component } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent {
  constructor(private apiService: ApiService) {}
  
  respo: any[] = [];

  ngOnInit() {}

  searchText: string = '';
  search() {
    this.apiService.getRepos('octocat', 2, 1).subscribe((data: any = []) => {
      console.log(data);
    });
  }
}
