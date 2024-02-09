import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { tick } from '@angular/core/testing';
import { first } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-repos-card',
  templateUrl: './repos-card.component.html',
  styleUrls: ['./repos-card.component.scss'],
})
export class ReposCardComponent implements OnChanges {
  @Input() repo: any;
  @Input() githubUsername: any;

  constructor(private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['githubUsername']) {
      this.apiService
        .getRepoLanguages(this.githubUsername, this.repo.name)
        .subscribe((data) => {
          Object.keys(data).forEach((key) => {
            this.languages.push(key);
          });
        });
    }
  }
  
  languages: string[] = [];

  ngOnInit() {}
}
