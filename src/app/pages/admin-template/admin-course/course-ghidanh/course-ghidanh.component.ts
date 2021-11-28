import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { DataService } from "@services/data.service";

@Component({
  selector: "app-course-ghidanh",
  templateUrl: "./course-ghidanh.component.html",
  styleUrls: ["./course-ghidanh.component.scss"],
})
export class CourseGhidanhComponent implements OnInit {
  courseGhidanh: any;
  listUser: any;
  listUserAccess: any;
  listDefaultUserAccess: any;
  listUserNotAccess: any;
  listDefaultUserNotAccess: any;

  error: any;
  account: any;

  constructor(
    private dataService: DataService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe((value: any) => {
      this.courseGhidanh = value?.courseGhidanh;
      if (Object.keys(value).length) {
        this.getListUser();
        this.getListUserNotAccess();
        this.getListUserAccess();
      }
    });
  }

  getListUserNotAccess() {
    this.dataService
      .post("api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet", {
        maKhoaHoc: this.courseGhidanh,
      })
      .subscribe({
        next: (result) => {
          this.listUserNotAccess = result;
          this.listDefaultUserNotAccess = result;
        },
        error: (error) => {
          this.error = error;
        },
      });
  }

  getListUser() {
    this.dataService
      .post(`api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh`, {
        maKhoaHoc: this.courseGhidanh,
      })
      .subscribe({
        next: (data) => {
          this.listUser = data;
        },
        error: (error) => {
          this.error = error;
        },
      });
  }

  getListUserAccess() {
    this.dataService
      .post(`api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`, {
        maKhoaHoc: this.courseGhidanh,
      })
      .subscribe({
        next: (data) => {
          this.listUserAccess = data;
          this.listDefaultUserAccess = data;
        },
        error: (error) => {
          this.error = error;
        },
      });
  }

  onInput(value: string) {
    this.account = value;
  }
  // ghi danh khoa hoc
  handleGhidanh(taiKhoan: any) {
    if (taiKhoan) {
      this.apiGhidanh(taiKhoan);
    } else {
      if (this.account) {
        this.apiGhidanh(this.account);
      }
    }
  }

  apiGhidanh(account: any) {
    if (account) {
      this.dataService
        .post(
          `api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
          {
            maKhoaHoc: this.courseGhidanh,
            taiKhoan: account,
          },
          {
            responseType: "text",
          }
        )
        .subscribe({
          next: (result: any) => {
            if (account !== this.account) {
              this.getListUserNotAccess();
            } else {
              this.getListUser();
            }
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }

  // huy ghi danh khoa hoc

  cancelCourseGhidanh(account: any, type: any) {
    this.dataService
      .post(
        "api/QuanLyKhoaHoc/HuyGhiDanh",
        {
          maKhoaHoc: this.courseGhidanh,
          taiKhoan: account,
        },
        {
          responseType: "text",
        }
      )
      .subscribe((result) => {
        if (type == 1) {
          this.getListUserNotAccess();
        } else {
          this.getListUserAccess();
        }
      });
  }

  // tim kiem user
  searchUser(value: string, type: any) {
    if (type === 1) {
      this.listUserNotAccess = this.listDefaultUserNotAccess.filter(
        (user: any) => {
          return user.hoTen.toLowerCase().includes(value.trim().toLowerCase());
        }
      );
    } else {
      this.listUserAccess = this.listDefaultUserAccess.filter((user: any) => {
        return user.hoTen.toLowerCase().includes(value.trim().toLowerCase());
      });
    }
  }
}
