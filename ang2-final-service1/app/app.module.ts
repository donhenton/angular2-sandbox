import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {RestaurantFormComponent} from './restaurant-form.component'
import {FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RestaurantService} from './restaurant.service';

@NgModule({
  imports:      [ BrowserModule,FormsModule,HttpModule],
  providers: [RestaurantService],
  declarations: [ AppComponent ,RestaurantFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
