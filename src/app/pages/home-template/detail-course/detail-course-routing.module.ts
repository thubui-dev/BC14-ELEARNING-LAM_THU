import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailCourseComponent } from './detail-course.component';

const routes: Routes = [
  {
    path: '',
    component: DetailCourseComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailCourseRoutingModule {}
