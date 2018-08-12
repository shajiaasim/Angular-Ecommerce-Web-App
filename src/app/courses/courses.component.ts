import { Component, OnInit } from "@angular/core";
import { CoursesService } from "src/app/courses.service";
import { AuthorsService } from "src/app/authors.service";

@Component({
  selector: "app-courses",
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class CoursesComponent implements OnInit {
  title = "list Of Courses";

  courses;
  authors;
  //Dependency Injection of Service Class
  constructor(courseService: CoursesService, authorsService: AuthorsService) {
    this.courses = courseService.getCourses();
    this.authors = authorsService.getAuthors();
  }

  ngOnInit() {}
}
