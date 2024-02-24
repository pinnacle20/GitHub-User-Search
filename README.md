# GITHUB USER SEARCH APP

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.9.

## FEATURES

[Checkout App ](https://pinnacle20.github.io/fyle-internship-challenge-23/)

**Pagination :**
Used MAT-PAGINATOR, a component provided by Angular Material.

**Loader :**
Used LOADER-INTERCEPTOR, basically a implementation of HTTP INTERCEPTOR to display a loading indicator while an HTTP request is in progress and hide it once the request is completed.

**API caching :**
Again used a implementation of HTTP INTERCEPTOR to cache response of certain API endpoints.

**Github API rate limit :**
Used Github Autherization in API calls.

_Please add your Secret key in api.service.ts file to avoid it_

[Generating secret key](https://docs.github.com/en/enterprise-server@3.9/authentication/keeping-your-account-and-data-secure/managing-your-personal-access-tokens#creating-a-personal-access-token)

**Testing :**

Command - ng test --no-watch --code-coverage

_Step1 -_ Run Command

_Step2 -_ Result gets console, also gets stored in coverage/ directory generated after running command

![CodeCoverage](https://github.com/pinnacle20/GitHub-User-Search/blob/master/src/assets/code%20coverage.PNG)

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

