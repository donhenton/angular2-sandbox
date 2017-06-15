import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RestaurantComponent }   from './components/restaurant.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RestaurantService} from './services/restaurant.service';
import {RestaurantActionService} from './services/restaurant-action.service';
import PubSubService from './services/pubsub.service';
import {RestaurantList} from './components/restaurant-list';
import {WaitIndicator} from './components/wait-indicator';
import {RestaurantListRow} from './components/restaurant-list-row';
import {EditRestaurantContainer} from './components/edit-restaurant-container';

@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule,HttpModule],
  providers: [RestaurantService,PubSubService,RestaurantActionService],
 
  declarations: [ RestaurantComponent ,RestaurantList,WaitIndicator,
  EditRestaurantContainer ,RestaurantListRow ],
  bootstrap:    [ RestaurantComponent ]
})
export class AppModule { }
