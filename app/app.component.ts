import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component'
/*Directives extend the Document Object Model*/
@Component({
    selector: 'my-app',
    template: '<h1>Dan's First Angular 2 App</h1><courses></courses>',
    directives: [CoursesComponent]
})
export class AppComponent {  }
