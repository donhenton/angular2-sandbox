import { Component } from '@angular/core';
import {FavoriteComponent} from './favorites.component';
 
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1> 
  <div class="row">
  <favorite (favChange)="onFavoriteChange($event)" [initialCount]="tweet.initialCount"  ></favorite>

  
  <span class="fav-text">
  <label>{{favText}}</label>
  </span>
   </div>
   `
})
export class AppComponent { 
   
  tweet = {initialCount: 12}
  favText = this.tweet.initialCount+"";

  onFavoriteChange(e)
  {
     
    this.favText = e.counter+"";
  }


//https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngOnInit() {
    console.log("on init 1");   
     
  }

   
 
  constructor()
  {
     //this.tweet.initialCount = 15;
      
  }

}
