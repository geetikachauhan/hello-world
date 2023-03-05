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
    <button class="btn btn-primary" [class.toggle-class]="isActive">
      Save
    </button>
    <button
      [style.background-color]="isActive ? 'white' : 'red'"
      (click)="onSave($event)"
    >
      Style
    </button>
  `,
})
export class CoursesComponent {
  title;
  courses;
  imageUrl;
  colSpan = 2;
  isActive = true;

  constructor(service: CoursesService) {
    this.title = service.getTitle();
    this.courses = service.getCourses();
    this.imageUrl = service.getImageUrl();
  }

  onSave($event: any) {
    console.log('Style was clicked', $event);
  }

  //Logic for calling HTTP service
}
