import { Component } from '@angular/core';
import {RestaurantService} from './restaurant.service';

@Component({
  selector: 'restaurant-form',
  templateUrl: 'app/restaurant-form.component.html',
  styles: [`

    .template-form
    {
      width 85%

    }
    #result-text
    {
       height: 200px;
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
export class RestaurantFormComponent { 

  resultText= "{bonzo: 33}";
  isLoading = false;
  constructor(private restaurantService: RestaurantService)
  {

  }

  ngOnInit()
  {
    console.log("in on init()")
  }

  onSubmit(form)
  {
     this.isLoading=true;
    this.restaurantService.getRestaurant(form.value.id)
    .subscribe(json => {
      this.isLoading = false;
      this.resultText = JSON.stringify(json, null,' ');
    }, error => {

      this.isLoading = false;
      var message = JSON.parse(error._body);
      this.resultText = message.message;


    });
    return false;
  }


}
