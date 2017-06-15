import { Component, Input, EventEmitter, Output } from '@angular/core';
import {FavoriteComponent} from './favorites.component'


@Component({
  selector: 'post',
  template: `  

      <div class="post-Component">
        <img class="user-image" src={{post.url}} />
        <span class="user-text-container">
          <div>
            <span class="user-name">{{post.username}}</span> 
            <span class="user-handle">{{post.handle}}</span> 
          </div>
          <div class="user-text">{{post.text}}</div>
          <div class="user-favorite"><favorite [initialCount]="post.count"></favorite></div>
        </span>
      </div>

     `,

  styles: [
    `
     .post-Component
     {
         
         width: 450px;
          display: flex;
          align-items: center;

     }
     .post-Component img
     {
        align:middle;
        
     }
     .post-Component .user-text-container
     {
         
        font-size: 15px;
        
        margin: 15px;  
     }


      .post-Component .user-text-container .user-name
     {
         font-family: Orbitron;
         font-weight: 700;

     }
     .post-Component .user-text-container .user-handle
     {
         opacity: .55

     }
    
    `



  ]
})
export class PostComponent {

  @Input() post: object;


  constructor() {

  }


  ngOnInit() {
   // console.log("post is " + JSON.stringify(this.post));

  }









}
