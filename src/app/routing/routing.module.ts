import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { SearchComponent } from '../search/search.component';
import { AboutComponent } from '../about/about.component';
import { ProfileComponent } from '../profile/profile.component';
import { NotFoundComponent } from '../not-found/not-found.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([
      { path: 'profile', component: ProfileComponent },
      { path: 'search', component: SearchComponent },
      { path: 'about', component: AboutComponent },
      { path: '', redirectTo: '/search', pathMatch: 'full' },
      { path: '**', component: NotFoundComponent }
    ])
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
