
import {Component} from 'angular2/core'
import {CourseService} from './course.service'

/*Java Annotation = Decorators in Angular */
/*The back tick allows the template to be broken into multiple lines */
@Component({
  selector: 'courses',
  template: `
    <h2>Courses</h2>
    {{title}}
    <ul>
      <li *ngFor="#course of courses">
      {{courses}}
      </li>
    </ul>
    `

})

export class CoursesComponent{
  title: string = "This is the TITLE";
  courses;

  constructor(courseService: CourseService){
    
  }

}
