import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-repos-card',
  templateUrl: './repos-card.component.html',
  styleUrls: ['./repos-card.component.scss'],
})
export class ReposCardComponent {
  @Input() repo: any;

  topics: string[] = [];

  ngOnInit() {
    this.repo.topics.forEach((key: string) => {
      this.topics.push(key);
    });
  }
}
