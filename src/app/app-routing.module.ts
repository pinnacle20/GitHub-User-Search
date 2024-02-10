import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';

const routes: Routes = [
  { path: '', component: SearchPageComponent },
  { path: 'profile', component: ProfilePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
