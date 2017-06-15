import { Component } from '@angular/core';
import { RestaurantList } from './restaurant-list'
import { EditRestaurantContainer } from './edit-restaurant-container'
import { RestaurantActionService } from './../services/restaurant-action.service';
import { WaitIndicator } from './wait-indicator';
import PubSubService from './../services/pubsub.service';
import { Subject } from "rxjs/Subject";
import {FeedbackMessage} from './../model/restaurant.interface';


@Component({
  selector: 'restaurant-app',
  styles: [` 

     .restaurantApp   #mainDisplayMessage { 
       font-size: 20px;  
       margin: 20px;
       border: thin solid #ddd;
       height: 40px;
       
      }

    .restaurantApp   #mainDisplayMessage.success {
      color: blue; }
    .restaurantApp   #displayMessage.error {
      color: red; }



  `],
  template: `
  
  <h3>Restaurant List</h3>
  <div id="reactRestaurantContainer">
      <div class="restaurantApp grouping">
      <wait-indicator [isProcessing]="true"></wait-indicator>
      <div   id="mainDisplayMessage">{{displayMessage}}</div>
      <restaurant-list></restaurant-list>

      <div id="#editControlGroup" class="grouping">

        <edit-restaurant-container></edit-restaurant-container>

      </div>


      </div>
  </div>
 
  
  `
})
export class RestaurantComponent {

  displayMessage: string;
  private subscription: Subject<any>;
  constructor(actionService: RestaurantActionService, private sub: PubSubService) {

    var channel = sub.getChannel();
    this.subscription = channel.observe(sub.getMessageTopic());

    this.subscription
      .subscribe(
      (data:FeedbackMessage) => {

        this.handleMessage(data);

      },
      (error) => {
        console.log(JSON.stringify(error))
      }

      );


    this.displayMessage = "get a job";

  }


  handleMessage(data:FeedbackMessage) {


    if (data.show)
    {
      this.displayMessage = data.message;
    }
    else
    {
      this.displayMessage = "";
    }


  }




}
