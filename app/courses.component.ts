
import {Component} from 'angular2/core'
import {CourseService} from './course.service'
import {AutoGrowDirective} from './auto-grow.directive'
/*Java Annotation = Decorators in Angular */
/*The back tick allows the template to be broken into multiple lines */
/*Providers are like vars can pass any value into the Array. Here I am using it for
dependency injection of CourseService*/

@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{title}}
    <input type="text" autoGrow />
    <ul>
      <li *ngFor="#course of courses">
      {{courses}}
      </li>
    </ul>
    `,
    providers: [CourseService],
    directives: [AutoGrowDirective]

})

export class CoursesComponent{
  title: string = "This is the TITLE";
  courses;

  constructor(courseService: CourseService){
    this.courses = courseService.getCourses();
  }

}
