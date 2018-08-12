import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from './courses.service';
import { FavouriteComponent } from './favourite/favourite.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
