import { Component } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
    <img [src]="imageUrl" /><!--property binding-->
    <table>
      <tr>
        <td [attr.colspan]="colSpan">ColSpan</td>
      </tr>
    </table>
  `,
})
export class CoursesComponent {
  title;
  courses;
  imageUrl;
  colSpan = 2;

  constructor(service: CoursesService) {
    this.title = service.getTitle();
    this.courses = service.getCourses();
    this.imageUrl = service.getImageUrl();
  }

  //Logic for calling HTTP service
}
