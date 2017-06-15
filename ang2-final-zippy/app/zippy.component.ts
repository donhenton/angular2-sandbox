import { Output,Input,Component } from '@angular/core';
 

@Component({
  selector: 'zippy',
  template: ` 
    <div class="zippy-Component">
      <div class="title-section" (click)="bindClick()">
      <span class="title-text">{{title}}</span>
      <span class="open-arrow" [innerHTML]="getIndicator() | safe: 'html'" ></span>
      
      </div>
      <div class="body-section" [ngClass]="{hideItem: !isOpen}">
         <ng-content select=".zip-contents"></ng-content>
      </div>
      <div class="body-section" *ngIf="isOpen">
         you could put the ng-content here but you are allowed only one use
      </div>

    </div>
   `,
  styles:
  [
    `
        .zippy-Component
        {
          border: thin solid #ccc;
         
          margin: 0px 25px;
          font-size: 20px;
          width: 75%;
          


        }
        .hideItem
        {
          display: none;
        }

        .zippy-Component:hover
        {
          
          
        }

        .body-section
        {
           margin: 35px 20px;
          
        }
        .title-section:hover
        {
           background-color: #eee;
          
        }
        .title-section .title-text
        {
          margin-left: 20px;
        }

        .title-section
        {
           padding: 20px 0px;
           font-family: Orbitron;
           font-weight:700;
           cursor: pointer;
          
        }
       .open-arrow
       {
         font-size: 25px;
         float: right;
         margin-right: 20px;
       }
    
    `
  ]
})
export class ZippyComponent {

  @Input() title: string = "";
  isOpen:boolean =  false;
  private openIndicator = "&#9650;"
  private closedIndicator = "&#9660;"

  constructor() {
     

  }

  bindClick()
  {
    this.isOpen = !this.isOpen;
  }

  getIndicator()
  {
    if (this.isOpen)
    {
      return this.openIndicator;
    }
    else
    {
      return this.closedIndicator;
    }
  }


}


