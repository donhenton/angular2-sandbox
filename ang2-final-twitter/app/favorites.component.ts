import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `<i
            (click)="onClick()"
            class="fi fi-heart" 
             [class.isFavorite] = "isFavorite">
             
  </i>
  <span>{{counter}}</span>
     `,

  styles: [
    `
    .fi
    {
        font-size: 30px;
        vertical-align: text-top;
        color: #ccc;
        cursor: pointer;
    }

    .fi.isFavorite
    {
        
        color: deeppink;
        
    }
    
    
    `



  ]
})
export class FavoriteComponent {

  @Input() initialCount=3; 
  isFavorite = false;
  @Output() change = new EventEmitter();
  counter = this.initialCount;

  constructor() {
    
  }

  //https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngOnInit() {
   
    this.counter = this.initialCount;
  }



  onClick() {


    this.isFavorite = !this.isFavorite;

    if (this.isFavorite) {
      this.counter++;
    }
    else {
      this.counter--;
      if (this.counter < 0) {
        this.counter = 0;
      }
    }

    this.change.emit({
      counter: this.counter

    })
  }





}
