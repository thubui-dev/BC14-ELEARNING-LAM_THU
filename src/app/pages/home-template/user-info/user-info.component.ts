import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "@services/data.service";

@Component({
  selector: "app-user-info",
  templateUrl: "./user-info.component.html",
  styleUrls: ["./user-info.component.scss"],
})
export class UserInfoComponent implements OnInit {
  detailUserCourse: any = {};
  alert: boolean = false;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getUserCourse();
  }

  getUserCourse() {
    this.dataService.getDetailUserCourse().subscribe((result: any) => {
      this.detailUserCourse = { ...result };
      console.log(this.detailUserCourse);
    });
  }

  registerCourse(courses: any) {
    console.log(courses);
    this.dataService.postRegisterCourses(courses).subscribe((result) => {
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
