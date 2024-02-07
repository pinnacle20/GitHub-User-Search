import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiCacheInterceptorService } from './services/api-cache-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
     {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiCacheInterceptorService,
      multi: true
     }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
