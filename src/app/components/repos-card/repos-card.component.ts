import { Component } from '@angular/core';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repos-card',
  templateUrl: './repos-card.component.html',
  styleUrls: ['./repos-card.component.scss'],
})
export class ReposCardComponent {
  constructor(private apiService: ApiService) {}

  respo: any[] = [];

  repoName = '';
  repoDes = '';
  languages: string[] = [];
  stars = '';
  forks = '';

  ngOnInit() {
    this.apiService.getRepos('Swarnendu0123', 1, 20).subscribe((data) => {
      let firstRepo = data.at(1);
      console.log(firstRepo);
      this.repoName = firstRepo.name;
      this.repoDes = firstRepo.description;
      this.forks = firstRepo.forks_count;
      this.stars = firstRepo.stargazers_count;

      this.apiService
        .getRepoLanguages('Swarnendu0123', 'http-request-inspector')
        .subscribe((data) => {
          Object.keys(data).forEach((key) => {
            this.languages.push(key);
          });
        });
    });
  }
}
