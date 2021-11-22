import { Component, OnInit } from "@angular/core";
import { DataService } from "@services/data.service";

import { Subscription } from "rxjs";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
})
export class UserInfoComponent implements OnInit {
  alert: boolean = false;
  renderInfo: any;
  subRenderInfo = new Subscription();

  constructor(private data: DataService) {}

  ngOnInit(): void {}

  registerCourse(courses: any) {
    console.log(courses);
    this.data.postRegisterCourses(courses).subscribe((result) => {
      console.log(result);
      this.alert = true;
      courses.taiKhoan.reset({});
      courses.maKhoaHoc.reset({});
    });
  }
  closeAlert() {
    this.alert = false;
  }
}
