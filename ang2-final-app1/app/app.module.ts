import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import {CoursesComponent} from './courses.component';
import {CourseService} from './course.service'
import { AutoGrowDirective } from "./auto-grow.directive";

@NgModule({
  imports:      [ BrowserModule ], // what modules are used, provides eg ngFor
  declarations: [ AppComponent,CoursesComponent, AutoGrowDirective ], // what components are part of this module
  //exports                                        // what will be visible
  //providers                                      
  providers: [CourseService], // modules used for dependency injection could be done at component level
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
