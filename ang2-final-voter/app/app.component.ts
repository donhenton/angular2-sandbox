import { Component } from '@angular/core';
import {VoteComponent} from './vote.component';



@Component({
  selector: 'my-app',
  template: `<h3>Voter Component</h3> 
  <div class="row app-Component">
  <div class="vote-component-container grouping">
  <vote  (myVoteChange)="onVoteChange($event)" [voteCount]="voteInfo.voteCount" [myVote]="voteInfo.myVote"></vote>
  </div>
  <span class="myvote-display">My Vote: {{voteInfo.myVote}}</span>
   </div>
   `,
   styles:
   [
    `
      .app-Component
      {
        width: 200px;
        display: flex;
        align-items: center;
        
      }
      .app-Component .vote-component-container
      {
        vertical-align: text-top;
          
      }
      .app-Component .myvote-display
      {
        margin-left: 30px;
         
        
      }
    
    `
   ]
})
export class AppComponent { 

  voteInfo = {myVote: -1,voteCount:25}
  constructor()
  {
      
      
  }
  onVoteChange(data)
  {
     this.voteInfo.myVote = data.myVoteUpdate;
     
  }

}


