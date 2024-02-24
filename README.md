### Install requirements

- Install angular cli [Ref](https://angular.io/cli)
- `npm install` in this repository

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).

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

![CodeCoverage](https://github.com/pinnacle20/fyle-internship-challenge-23/blob/master/src/assets/code%20coverage.PNG)
