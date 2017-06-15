 import  {Component} from '@angular/core';
 import {CourseService} from './course.service'
 
 @Component( 
 {
     selector: 'courses',
     template: `<h2>get another job, {{title}}</h2>
     <input type="text" autoGrow />
     <ul>
           <li *ngFor="let farp of garbage">{{farp}}</li>
     </ul>`,

     
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