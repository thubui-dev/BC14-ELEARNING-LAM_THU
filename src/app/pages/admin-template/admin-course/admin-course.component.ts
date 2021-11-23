import { Component, OnInit } from "@angular/core";
import { DataService } from "@services/data.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-course",
  templateUrl: "./admin-course.component.html",
  styleUrls: ["./admin-course.component.scss"],
})
export class AdminCourseComponent implements OnInit {
  searchCourse: string;
  listCourse: any;
  subListCourse = new Subscription();
  constructor(private data: DataService, private route: Router) {
    this.searchCourse = "";
    this.listCourse = [];
  }

  ngOnInit(): void {
    this.getListCourse();
  }

  getListCourse() {
    this.subListCourse = this.data
      .get("/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01")
      .subscribe((result: any) => {
        this.listCourse = result;
      });
  }

  fillEditCourse(data: any) {
    this.route.navigate(["/admin/admin-course/quanlykhoahoc"], {
      queryParams: { maKhoaHoc: data.maKhoaHoc, tenKhoaHoc: data.tenKhoaHoc },
    });
  }

  deleteListCourse(id: any) {
    console.log("id", id);

    this.data
      .delete(`/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${id}`)
      .subscribe((result: any) => {
        this.listCourse = this.listCourse.filter((item: any) => {
          if (item.id === id) {
            return false;
          } else {
            return true;
          }
        });
      });
  }
}
