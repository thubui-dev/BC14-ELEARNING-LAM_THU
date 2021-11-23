import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AddCourseRoutingModule } from "./add-course-routing.module";
import { AddCourseComponent } from "./add-course.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AddCourseComponent],
  imports: [CommonModule, AddCourseRoutingModule, FormsModule],
})
export class AddCourseModule {}
