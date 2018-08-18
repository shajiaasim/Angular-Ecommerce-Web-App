import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  post={
    title : 'e-commerce',
    //initializng state of component
    isFavourite: false
  }

  tweet = {
    body: 'Angular is the best',
    isLiked : false,
    likesCount :10
  }

  clicked(isFav){
    console.log("clicked: " + isFav);
  }
}
