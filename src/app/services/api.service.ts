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

  getRepoLanguages(githubUsername: string, repoName: string) {
    return this.httpClient.get<any>(
      `https://api.github.com/repos/${githubUsername}/${repoName}/languages`
    );
  }
}
