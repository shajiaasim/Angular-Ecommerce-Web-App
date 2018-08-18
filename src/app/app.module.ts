import { FollowersService } from './followers.service';
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import {HttpModule} from "@angular/http"
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses/courses.component";
import { CoursesService } from "./courses.service";
import { FormsModule } from "@angular/forms";
import { FavouriteComponent } from "./favourite/favourite.component";
import { TextBoxComponent } from "./text-box/text-box.component";
import { TextCasePipe } from './text-case.pipe';
import { LikeComponent } from './like/like.component';
import { ZippyComponent } from './zippy/zippy.component';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    FavouriteComponent,
    TextBoxComponent,
    TextCasePipe,
    LikeComponent,
    ZippyComponent,
    FollowersComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule],
  providers: [CoursesService, FollowersService],
  bootstrap: [AppComponent]
})
export class AppModule {}
