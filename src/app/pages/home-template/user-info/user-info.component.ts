import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "@services/data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
})
export class UserInfoComponent implements OnInit {
  @Input() infoCourse: any;
  detailUserCourse: any = {};
  alert: boolean = false;
  subUserCourse = new Subscription();
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getUserCourse();
  }

  getUserCourse() {
    this.subUserCourse = this.data
      .getDetailUserCourse()
      .subscribe((result: any) => {
        this.detailUserCourse = { ...result };
        console.log(this.detailUserCourse);
      });
  }

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

  ngOnDestroy() {
    console.log("ngOnDestroy");
    this.subUserCourse.unsubscribe();
  }
}
