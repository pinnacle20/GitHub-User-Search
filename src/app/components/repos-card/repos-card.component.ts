import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repos-card',
  templateUrl: './repos-card.component.html',
  styleUrls: ['./repos-card.component.scss'],
})
export class ReposCardComponent {
  @Input() repo: any;

  topics: string[] = [];

  // For each repository, we extract topic names and push it in the list which is then used for displaying on the frontend
  ngOnInit() {
    this.repo.topics.forEach((key: string) => {
      this.topics.push(key);
    });
  }
}
