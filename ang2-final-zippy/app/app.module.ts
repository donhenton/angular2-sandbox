import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import {ZippyComponent} from './zippy.component';
import {SafePipe} from './safe.pipe'

@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,ZippyComponent, SafePipe],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
