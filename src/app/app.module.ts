import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from  '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ApiCacheInterceptorService } from './services/api-cache-interceptor.service';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ReposCardComponent } from './components/repos-card/repos-card.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    SearchPageComponent,
    ReposCardComponent,
    ProfilePageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    AppRoutingModule
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
