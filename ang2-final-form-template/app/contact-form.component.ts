import { Component } from '@angular/core';
@Component({
  selector: 'contact-form',
  templateUrl: 'app/contact-form.component.html',
  styles: [`

    .template-form
    {
      width 85%

    }
    #comment
    {
       height: 125px;
    }
    input.ng-invalid.ng-touched
    {
      border: 2px solid red;
    }

    .errorInfo
    {
      padding: 2px;
      float:right;
      margin-right: 5px;
    }

  `]
})
export class ContactFormComponent { 


  log(x)
  {
    console.log(x)
  }

  onSubmit(form)
  {
    console.log(form);
  }


}
