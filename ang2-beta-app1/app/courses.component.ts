 import  {Component} from 'angular2/core';
 import {CourseService} from './course.service'
 
 @Component( 
 {
     selector: 'courses',
     template: `<h2>get another job, {{title}}</h2>
     
     <ul>
           <li *ngFor="#farp of garbage">{{farp}}</li>
     </ul>`,

     providers: [CourseService]
 })
 
 export class CoursesComponent
 {
     constructor(courseService: CourseService)
     {
        this.garbage = courseService.getCourses();
     }
     title: string = "Bozo!!"
     garbage ;
     
     
     
     
 }