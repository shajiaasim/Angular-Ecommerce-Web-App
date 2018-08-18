import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FollowersService {

  private url="http://api.github.com/users/mosh-hamedani/followers";


  constructor(private http: Http) {

   }

   getFollowers(){
     return this.http.get(this.url);
   }
}
