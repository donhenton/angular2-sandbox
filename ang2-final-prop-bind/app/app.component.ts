import { Component } from '@angular/core';
 
@Component({
  selector: 'my-app',
  template: `<h1>My First Angular App</h1>
  <div class="row form">
   Note that the forms module had to be imported in the app module file
  </div>
  <button   (click)="onChangeContents($event)" class="btn btn-primary">Change Text</button>
  <button   (click)="onChangeClass($event)" class="btn btn-red">Change Class</button>
  <div class="row form">
  <label>Input Demo</label> <input   [(ngModel)]="inputDemo" type="text" size="40" />
  <label>Output Echo:</label>   <span>{{inputDemo}}</span>
  </div>

   <div class="row form">
  <span  [style.backgroundColor]="classToggle ? 'blue' : 'gray'">Style Demo 1</span>
  </div>

   <div class="row form">
  <span [ngStyle]="getStyles()">Style Demo 2</span>
  </div>

  `
})
export class AppComponent { 

   

  classToggle: boolean;
  inputDemo: string;

  getStyles()
  {
    let ss = {'color':'white',backgroundColor: 'blue'};
    if (this.classToggle)
    {
      ss = {'color':'yellow',backgroundColor: 'red'};
    }

    return ss;
  }

  onChangeClass()
  {
    this.classToggle = ! this.classToggle;
  }


  onChangeContents($event)
  {
    console.log("button event "+$event.target)
    if (this.inputDemo === "alpha")
    {
      this.inputDemo = 'beta'
    }
    else
    {
      this.inputDemo = "alpha"
    }
  }
 

  constructor()
  {
    this.inputDemo = "beta";
  }

}
