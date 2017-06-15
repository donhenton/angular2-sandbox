import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'favorite',
  template: `<i
            (click)="onClick()"
            class="fi fi-heart" 
             [class.isFavorite] = "isFavorite">
             
  </i>
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

  @Input('initialCount') initialCount=3; 
  isFavorite = false;
  @Output('favChange') change = new EventEmitter();
  counter = this.initialCount;

  constructor() {
    console.log(" 2 initialCount " + this.initialCount)
  }

  //https://angular.io/docs/ts/latest/guide/lifecycle-hooks.html
  ngOnInit() {
    console.log("on init 2 " + this.initialCount);
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
