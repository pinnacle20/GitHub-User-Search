import { Component, Input } from '@angular/core';
import { tick } from '@angular/core/testing';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repos-card',
  templateUrl: './repos-card.component.html',
  styleUrls: ['./repos-card.component.scss'],
})
export class ReposCardComponent {
  @Input() repo: any;
  @Input() githubUsername: any;

  constructor(private apiService: ApiService) {}

  languages: string[] = [];

  ngOnInit() {
    this.apiService
      .getRepoLanguages(this.githubUsername, this.repo.name)
      .subscribe((data) => {
        Object.keys(data).forEach((key) => {
          this.languages.push(key);
        });
      });
  }
}
