import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  @Input('tweet') tweet:any;
  color:string;

  constructor() { }

  onClick(){
    this.tweet.isLiked = !this.tweet.isLiked;
    this.tweet.likesCount += (this.tweet.isLiked) ? 1:-1;
    this.color = (this.tweet.isLiked) ? "deeppink":"#ccc";
  }

  ngOnInit() {
    this.color = (this.tweet.isLiked) ? "deeppink":"#ccc";
    console.log(this.tweet);
  }

}
