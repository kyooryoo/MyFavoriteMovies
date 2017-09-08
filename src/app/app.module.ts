import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { MovieDetailComponent } from './movie-detail.component';
import { MoviesComponent } from './movies.component';
import { DashboardComponent } from './dashboard.component';
import { AppComponent }  from './app.component';
import { MovieService } from './movie.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      AppRoutingModule,
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    MovieDetailComponent,
    MoviesComponent,
  ],
  providers: [
    MovieService,
  ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
