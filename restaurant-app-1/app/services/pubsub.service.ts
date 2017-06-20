
//import 'rxjs/Rx'; for all
//import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Restaurant} from './../model/restaurant.interface';
import rr from './../mq/index';
import {Channel} from './../mq/index';


let _service:PubSubServiceImpl = null; 

@Injectable()
export default class PubSubService {
 
  private service:PubSubServiceImpl
  constructor()
  {
    console.log("in the constructor of the pubsubservice")
    if(_service === null)
    {
        _service = new PubSubServiceImpl();
        console.log("created service in pubsub "+_service)
    }
    
  }

  getService():PubSubServiceImpl
  {
      return _service;
  }

}

export interface PubSubSystem
{
    getChannel():Channel;
    getReviewEditTopic():string;
    getRestaurantEditTopic():string;
    getWaitTopic():string;
    getMessageTopic():string;
    getRefreshTopic():string;

}


class PubSubServiceImpl implements PubSubSystem {


  private channel:Channel;
    constructor()
    {
         console.log("in the constructor assigning the channel")
         this.channel = rr.channel("messages");
         
    }


    public getChannel():Channel
    {
        return this.channel;
    }
     getReviewEditTopic():string
    {
        return 'review.edit';
    }

    getRestaurantEditTopic():string
    {
        return 'restaurant.edit';
    }
    getWaitTopic():string
    {
        return 'wait.indicator';
    }

    getMessageTopic():string
    {
        return 'message.topic';
    }

    getRefreshTopic():string
    {
        return "refresh.request";
    }


}

 