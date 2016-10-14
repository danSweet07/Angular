import {Component} from 'angular2/core';
import {CoursesComponent} from './courses.component';
import {AuthorsComponent} from './authors.component';
/*Directives extend the Document Object Model*/
@Component({
    selector: 'my-app',
    template: `<h1>Dan's First Angular 2 App</h1>
    <courses></courses>
    <authors></authors>`,
    templateUrl: 'app.component.html',
    styleUrls: ['style.css'],
    styles: [`
      .card {
        height: 70px;
        width: 100px;
      }
    `],
    encapsulation: ViewEncapsulation.Native,
    directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent { }
