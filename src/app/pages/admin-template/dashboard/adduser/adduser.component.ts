import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/_core/services/data.service";
import { Router } from "@angular/router";
import { observable } from "rxjs";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.scss"],
})
export class AdduserComponent implements OnInit {
  id: any;
  item: any;
  error: any;
  sub: any;
  userEdit = {
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "GV",
    maNhom: "GP02",
    email: "",
  };

  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params: any) => {
      this.id = params["taiKhoan"];
      if (this.id) {
        this.data
          .post(`/api/QuanLyNguoiDung/ThongTinTaiKhoan`, params)
          .subscribe({
            next: (result) => {
              this.userEdit = result;
            },
            error: (error) => {
              this.error = error;
            },
          });
      }
    });
  }

  addUser(user: any) {
    if (!this.id) {
      user.maLoaiNguoiDung = "HV";
      user.maNhom = "GP02";
      this.data
        .post("api/QuanLyNguoiDung/ThemNguoiDung", user)
        .subscribe((result) => {
          this.router.navigate(["/admin/dashboard"]);
          this.item = result;
        });
    } else {
      user.maLoaiNguoiDung = user.loaiNguoiDung;
      user.maNhom = "GP02";
      user.taiKhoan = this.userEdit.taiKhoan;
      this.data
        .put("api/QuanLyNguoiDung/CapNhatThongTinNguoiDung", user)
        .subscribe({
          next: (result) => {
            this.router.navigate(["/admin/dashboard"]);
            this.item = result;
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }
}
