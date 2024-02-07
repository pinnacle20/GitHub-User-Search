import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class ApiCacheInterceptorService implements HttpInterceptor{
  constructor(private apiService : ApiService){}
  //Cache to store response data
  private cache = new Map<string, HttpResponse<any>>();
  
  //specifing set of endpoints to cache 
  private endpointsToCache = new Set([
    'https://api.example.com/repos',
  ]);

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if(this.endpointsToCache.has(req.url)){
      const cachedResponse = this.cache.get(req.url);
      if(cachedResponse){
        return of(cachedResponse);
      }
      return next.handle(req).pipe(
        tap((response) => {
          if (response instanceof HttpResponse) {
            this.cache.set(req.url, response);
          }
        })
      );
      
    }
    return next.handle(req);
  }

}
