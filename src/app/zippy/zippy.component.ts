import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css']
})
export class ZippyComponent implements OnInit {

  isClicked:boolean;

  toggle(){
    this.isClicked=!this.isClicked;
  }

  constructor() { }

  ngOnInit() {
    this.isClicked=false;
  }

}
