import { Component, OnInit, Input } from "@angular/core";
import { DataService } from "@services/data.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-modal-ghidanh",
  templateUrl: "./modal-ghidanh.component.html",
  styleUrls: ["./modal-ghidanh.component.scss"],
})
export class ModalGhidanhComponent implements OnInit {
  danhMucKhoaHoc: any;
  subgetCourse: any;
  // ghiDanh: any;
  accountRegister: any;
  error: any;
  type: any;
  listCourseNotAccess: any;
  listCourseNotAccessDefault: any;
  listCourseAccess: any;
  listCourseAccessDefault: any;

  @Input() account: any;

  accountCurrent: any;

  constructor(
    private dataService: DataService,
    private route: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  selectedCourse = "";

  onChange = (event: any) => {
    this.selectedCourse = event.target.value;
  };

  ngOnInit(): void {

    this.activatedRoute.queryParams.subscribe((value: any) => {

      this.accountCurrent = value?.taiKhoan;

      if (Object.keys(value).length) {

        this.getCourse();
        this.getListCourseNotAccess();
        this.getListCourseAccess();
      }
    });

  }

  onSearch(value: any, type: any) {
    if (type === 1) {
      this.listCourseNotAccess = this.listCourseNotAccessDefault.filter(
        (user: any) => {
          return user.tenKhoaHoc.toLowerCase().includes(value.trim().toLowerCase());
        }
      );
    } else {
      this.listCourseAccess = this.listCourseAccessDefault.filter((user: any) => {
        return user.tenKhoaHoc.toLowerCase().includes(value.trim().toLowerCase());
      });
    }
  }

  getCourse() {
    this.subgetCourse = this.dataService
      .post("/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh", "")
      .subscribe((result: any) => {
        this.danhMucKhoaHoc = result;
      });
  }

  getListCourseNotAccess() {
    this.dataService
      .post("api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet", {
        taiKhoan: this.accountCurrent,
      })
      .subscribe({
        next: (result) => {
          this.listCourseNotAccess = result;
          this.listCourseNotAccessDefault = result;

        },
        error: (error) => {
          this.error = error;
        },
      });
  }

  getListCourseAccess() {
    this.dataService
      .post("api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet", {
        taiKhoan: this.accountCurrent,
      })
      .subscribe({
        next: (result) => {
          this.listCourseAccess = result;
          this.listCourseAccessDefault = result;

        },
        error: (error) => {
          this.error = error;
        },
      });
  }

  ghiDanh() {
    this.dataService
      .post(`api/QuanLyKhoaHoc/GhiDanhKhoaHoc`, {
        maKhoaHoc: this.selectedCourse,
        taiKhoan: this.accountCurrent
      })
      .subscribe({
        next: (data) => {
          this.getCourse();
        },
        error: (error) => {
          this.error = error;
        },
      });
  }

  onInput(value: string) {
    this.accountRegister = value;
  }


  cancelRegisterGhidanh(maKhoaHoc: any, type: any) {
    this.dataService
      .post(
        "api/QuanLyKhoaHoc/HuyGhiDanh",
        {
          maKhoaHoc: maKhoaHoc,
          taiKhoan: this.accountCurrent,
        },
        {
          responseType: "text",
        }
      )
      .subscribe((result) => {
        if (type == 1) {
          this.getListCourseNotAccess();
        } else {
          this.getListCourseAccess();
        }
      });
  }



  handleRegister(data: any) {
    if (data) {
      this.dataService
        .post(
          `api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
          {
            maKhoaHoc: data,
            taiKhoan: this.accountCurrent,
          },
          {
            responseType: "text",
          }
        )
        .subscribe({
          next: (result: any) => {
            this.getListCourseNotAccess();
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }



}
