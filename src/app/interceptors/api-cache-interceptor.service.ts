import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from '../services/api.service';

@Injectable({
  providedIn: 'root',
})
export class ApiCacheInterceptorService implements HttpInterceptor {
  constructor(private apiService: ApiService) {}
  //Cache to store response data
  private cache = new Map<string, HttpResponse<any>>();

  //specifing set of endpoints to cache
  private endpointsToCache = new Set([
    'https://api.github.com/users'
  ]);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //checks if the request endpoint is present in the set of endpoints to cache
    if (this.endpointsToCache.has(req.url)) {

      const cachedResponse = this.cache.get(req.url);

      //if the response is found in the cache, returns it as an observable of HttpResponse
      if (cachedResponse) {
        return of(cachedResponse);
      }

      //if the response is not found, send the requestand and cache the response
      return next.handle(req).pipe(
        tap((response) => {
          if (response instanceof HttpResponse) {
            this.cache.set(req.url, response);
          }
        })
      );
    }

    //if the request enpoint isn't in the set of endpoint, send the request as it is to the server
    return next.handle(req);
  }
}
