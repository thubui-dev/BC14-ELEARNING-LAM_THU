import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailCourseRoutingModule } from './detail-course-routing.module';
import { DetailCourseComponent } from './detail-course.component';


@NgModule({
  declarations: [
    DetailCourseComponent
  ],
  imports: [
    CommonModule,
    DetailCourseRoutingModule
  ]
})
export class DetailCourseModule { }
