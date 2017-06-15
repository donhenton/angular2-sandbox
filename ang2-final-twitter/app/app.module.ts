import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { FormsModule } from '@angular/forms';
import TwitterService from './twitter.service';
import {PostComponent} from './post.component';
import {FavoriteComponent} from './favorites.component'
 
@NgModule({
  imports:      [ BrowserModule,FormsModule ],
  declarations: [ AppComponent,PostComponent,FavoriteComponent ],
  bootstrap:    [ AppComponent ] 
  
  
})
export class AppModule { }
