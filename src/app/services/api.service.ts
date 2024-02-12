import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}

  getUser(githubUsername: string) {
    return this.httpClient.get<any>(
      `https://api.github.com/users/${githubUsername}`,
      {
        headers: {
          Authorization: `Bearer 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`,
        },
      }
    );
  }

  // implement getRepos method by referring to the documentation. Add proper types for the return type and params
  getRepos(githubUsername: string, pageNo: number, perPage: number) {
    const BASEURL = `https://api.github.com/users/${githubUsername}/repos`;

    // Setting up query parameters for pagination
    const params = {
      page: pageNo.toString(),
      per_page: perPage.toString(),
    };

    // Setting up the headers with Authorization
    const headers = {
      Authorization: `Bearer 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`,
    };

    // Making the HTTP GET request with pagination parameters and headers
    return this.httpClient.get<any[]>(BASEURL, { params, headers });
  }
}
