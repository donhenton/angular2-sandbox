
//import 'rxjs/Rx'; for all
//import 'rxjs/add/operator/map';
//import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {Restaurant} from './../model/restaurant.interface';
import rr from './../mq/index';
import {Channel} from './../mq/index';

@Injectable()
export default class PubSubService {

    private channel:Channel;
    constructor()
    {
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

 