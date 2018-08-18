import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-text-box",
  templateUrl: "./text-box.component.html",
  styleUrls: ["./text-box.component.css"]
})
export class TextBoxComponent implements OnInit {
  text: string;
  fixedText : string;

  fix() {
    this.fixedText = this.text;
  }

  constructor() {}

  ngOnInit() {}
}
