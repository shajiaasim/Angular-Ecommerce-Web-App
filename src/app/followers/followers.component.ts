import { Component, OnInit } from '@angular/core';
import { FollowersService } from '../followers.service';

@Component({
  selector: 'followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(private followersService:FollowersService) { 
    
  }

  posts=[];
  ngOnInit() {
    this.followersService.getFollowers()
    .subscribe( response=>{
      this.posts = response.json();
      this.posts=this.posts.sort();
    });
  }

}
