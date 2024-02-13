# Fyle Frontend Challenge

## Who is this for?

This challenge is meant for candidates who wish to intern at Fyle and work with our engineering team. The candidate should be able to commit to at least 6 months of dedicated time for internship.

## Why work at Fyle?

Fyle is a fast-growing Expense Management SaaS product. We are ~40 strong engineering team at the moment.

We are an extremely transparent organization. Check out our [careers page](https://careers.fylehq.com) that will give you a glimpse of what it is like to work at Fyle. Also, check out our Glassdoor reviews [here](https://www.glassdoor.co.in/Reviews/Fyle-Reviews-E1723235.htm). You can read stories from our teammates [here](https://stories.fylehq.com).

## Challenge outline

This challenge involves implementing application using github api.

The services that you need to use are already implemented - check out ApiService.

You can see details of this challenge [here](https://fyleuniverse.notion.site/fyleuniverse/Fyle-Frontend-development-challenge-cb5085e5e0864e769e7b98c694400aaa)

**Note** - This challenge is in angular. We work on angular frameworks & after you join we expect the same from you. Hence it is required to complete this assignement in angular itself.

## What happens next?

You will hear back within 48 hours from us via email.

## Installation

1. Fork this repository to your github account.
2. Clone the forked repository and proceed with steps mentioned below.

### Install requirements

- Install angular cli [Ref](https://angular.io/cli)
- `npm install` in this repository

## Development server

Run `ng serve` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

## Further help

Visit the [Angular Documentation](https://angular.io/guide/styleguide) to learn more.
Styling is to be strictly done with [Tailwind](https://tailwindcss.com/docs/installation).

# PROPOSED SOLUTION

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
