import PubSubService from './../services/pubsub.service';
import { Subject } from "rxjs/Subject";
import {WaitRequest} from './../model/restaurant.interface';
import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'wait-indicator',
  template: `
   
  <div [class.waitIndicator]="isProcessing">
      
  </div>
 
  
  `
})
export class WaitIndicator {


  @Input() isProcessing: boolean = false;
  private subscription: Subject<any>;
  constructor(private sub: PubSubService) {
    var channel = sub.getChannel();
   // console.log(`wait observing ${sub.getWaitTopic()}`)
    this.subscription = channel.observe(sub.getWaitTopic());

    this.subscription
      .subscribe(
      (data:WaitRequest) => {
        console.log("wait got "+JSON.stringify(data))
        this.handleRequest(data);

      },
      (error) => {
        console.log(JSON.stringify(error))
      }

      );
  }

  handleRequest(data: WaitRequest) {
    this.isProcessing = data.state;
  }

}

