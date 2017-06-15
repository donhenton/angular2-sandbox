import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators,FormBuilder } from '@angular/forms';
import {UsernameValidators} from './username.validators';
import 'rxjs/Rx';

@Component({
  selector: 'signup-form',
  templateUrl: 'app/signup-form.component.html',
  styles: [`

    .template-form
    {
       

    }
    
    input.ng-invalid.ng-touched
    {
      border: 2px solid red;
    }

    .errorInfo
    {
      padding: 2px;
      float:left;
      margin-left: 5px;
    }

  `]
})
export class SignUpFormComponent {

  formObject: FormGroup;
  applicationMessage:string = "";

  constructor(fb: FormBuilder) {

      this.formObject = fb.group({
        username: ['a.pismo.clam',
        Validators.compose([
          Validators.required,
          UsernameValidators.cannotContainSpace,
          Validators.minLength(3)

        ]),UsernameValidators.shouldBeUniqueAsync],
        password: ['getajob',Validators.required],
        application:['']
      })


      // this.formObject = new FormGroup({
      // username: new FormControl('bonzo',Validators.required ),
      // password: new FormControl('dog',Validators.required)


    //});

  }

  ngOnInit()
  {
    console.log("get a job 1000")
    this.formObject.controls.application.valueChanges
    .debounceTime(400)
    .map(app => app+" app")
    .subscribe(this.onApplicationChange.bind(this));
  }

  onApplicationChange(ev)
  {
    //console.log("whoa ev "+ev);
    this.applicationMessage = "Your application is '"+ev+"'"
  }


  log() {
    console.log(this.formObject.value);
    console.log(this.formObject.controls);
  }


  signup()
  {
    //var submitInfo = {username: this.formObject.control.username.value, password: this.formObject.password.value}
    //var result = authService.login(submitInfo);
    var result = false;
     
    if (!result)
    {
      
      this.formObject.controls.username.setErrors({failedLogin: true})
      console.log(this.formObject.controls);
    }

  }


}
