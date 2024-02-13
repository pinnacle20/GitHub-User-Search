import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss'],
})
export class ErrorPageComponent {
  errorMessage: string;

  // It displays any error occured during execution 
  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {
      if (params['error'] === 'Not Found')
        this.errorMessage = "User doesn't exist";
      else this.errorMessage = params['error'].split['.'][0];
    });
  }
}
