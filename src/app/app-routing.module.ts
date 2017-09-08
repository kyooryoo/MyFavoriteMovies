import { NgModule }      from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovieDetailComponent } from './movie-detail.component';
import { MoviesComponent } from './movies.component';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: MovieDetailComponent },
    { path: 'movies', component: MoviesComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule { }
