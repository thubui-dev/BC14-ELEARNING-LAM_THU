import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AdminCourseRoutingModule } from "./admin-course-routing.module";
import { AdminCourseComponent } from "./admin-course.component";
import { FormsModule } from "@angular/forms";
import { NamePipe } from "./name.pipe";

@NgModule({
  declarations: [AdminCourseComponent, NamePipe],
  imports: [CommonModule, AdminCourseRoutingModule, FormsModule],
})
export class AdminCourseModule {}
