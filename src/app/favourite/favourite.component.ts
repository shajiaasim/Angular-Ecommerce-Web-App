import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-favourite",
  templateUrl: "./favourite.component.html",
  styleUrls: ["./favourite.component.css"]
})
export class FavouriteComponent implements OnInit {
 @Input("isFavourite") isFavourite: boolean;
@Output() change = new EventEmitter();



  constructor() {}

  click() {
    this.isFavourite = !this.isFavourite;
    // Can pass values from component out to subscriber
    this.change.emit(this.isFavourite);
  }

  ngOnInit() {}
}
