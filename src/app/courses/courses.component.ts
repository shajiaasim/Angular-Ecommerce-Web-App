import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  title="list Of Courses";
  courses =["math", "science","english","social studies"];
  constructor() { }

  ngOnInit() {
  }

}