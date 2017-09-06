import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from './movie-detail.component';

import { AppComponent }  from './app.component';

@NgModule({
  imports:      [ 
      BrowserModule,
      FormsModule,
  ],
  declarations: [ 
    AppComponent,
    MovieDetailComponent, 
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
