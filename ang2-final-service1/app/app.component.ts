import { Component } from '@angular/core';
import {RestaurantFormComponent} from './restaurant-form.component'


@Component({
  selector: 'my-app',
  template: `
  <h3>Restaurant Form</h3>
  
  <restaurant-form></restaurant-form>
  
  `
})
export class AppComponent { }
