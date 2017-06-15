import { Component } from '@angular/core';
import {SignUpFormComponent} from './signup-form.component'


@Component({
  selector: 'my-app',
  template: `
  <h3>Signup Form</h3>
  
  <signup-form></signup-form>
  
  `
})
export class AppComponent { }
