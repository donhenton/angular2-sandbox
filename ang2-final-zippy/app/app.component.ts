import { Component,Input, Output } from '@angular/core';
import {ZippyComponent} from './zippy.component';



@Component({
  selector: 'my-app',
  template: `<h3>Zippy Component</h3> 
  <div class="row app-Component">
  <div class="zip-component-container grouping">
   <zippy [title]="'My zip 1'">
   <div class="zip-contents">This is stuff that should be hidden 1 from app</div>
   
   </zippy>

   <zippy [title]="'My zip 2'">
   
   <div class="zip-contents">This is stuff that should be hidden 2 from app</div>
   </zippy>
  </div>
  
   </div>
   `,
   styles:
   [
    `
      .app-Component
      {
       
        
      }
      .app-Component .zippy-component-container
      {
        
          
      }
      .app-Component .zippy-display
      {
       
         
        
      }
    
    `
   ]
})
export class AppComponent { 

  
  constructor()
  {
      
      
  }
  

}


