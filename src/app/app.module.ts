import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

//imports for loading & configuring in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent }  from './app.component';
import { DashboardComponent } from './dashboard.component';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail.component';
import { MovieService } from './movie.service';
import { MovieSearchComponent } from './movie-search.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
      HttpModule,
      InMemoryWebApiModule.forRoot(InMemoryDataService),
      AppRoutingModule,
  ],
  declarations: [ 
    AppComponent,
    DashboardComponent,
    MovieDetailComponent,
    MoviesComponent,
    MovieSearchComponent,
  ],
  providers: [ MovieService ],
  bootstrap: [ AppComponent ],
})

export class AppModule { }
