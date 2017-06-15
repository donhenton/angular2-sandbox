import { Component } from '@angular/core';
import TwitterService from './twitter.service'
import {PostComponent} from './post.component'


@Component({
  selector: 'my-app',
  
  template: `<h3>Twitter Component</h3> 
  <div class="row app-Component">
    <div class="twitter-component-container grouping">

      <div class="bonzo" *ngFor="let postItem of posts">
          <post [post]="postItem"></post>
      <div>

    </div>
    
   </div>
   `,
   styles:
   [
    `
      .app-Component
      {
        width: 500px;
         
        
      }
      .app-Component .twitter-component-container
      {
        
          
      }
      .bonzo
      
    
    `
   ],
   providers: [TwitterService] //could be delcared in app.module as well for 'app wide' scope
})
export class AppComponent { 

  info: string;
  posts; object;
  constructor(private twitterService: TwitterService)
  {
     // this.info = "";//JSON.stringify(this.twitterService.getTwitterPosts());
    
      
  }
  ngOnInit() {
     
     this.posts = this.twitterService.getTwitterPosts();;
  }

}


