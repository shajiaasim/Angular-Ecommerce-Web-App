import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursesService } from "./courses.service";
import { FormsModule } from "@angular/forms";
import { FavouriteComponent } from "./favourite/favourite.component";
import { TextBoxComponent } from "./text-box/text-box.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    TextBoxComponent
  ],
  imports: [BrowserModule, FormsModule],
  providers: [CoursesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
