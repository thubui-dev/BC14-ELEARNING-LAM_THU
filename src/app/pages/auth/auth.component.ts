import { Component, OnInit } from "@angular/core";
import { DataService } from "src/app/_core/services/data.service";
import { Router } from "@angular/router";
import { ShareDataService } from "@services/share-data.service";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"],
})
export class AuthComponent implements OnInit {
  userInfo: any = {};
  constructor(private data: DataService, private router: Router, private share: ShareDataService) { }

  ngOnInit(): void { }

  login(user: any) {
    this.data
      .post("/api/QuanLyNguoiDung/DangNhap", user)
      .subscribe((result: any) => {
        if (result.maLoaiNguoiDung === "GV") {
          // Lưu trạng thái xuông local Store
          localStorage.setItem("UserAdmin", JSON.stringify(result));
          this.share.userLogin = result;
          // Chuyển Hướng
          this.router.navigate(["/admin/dashboard"]);
        } else {
          this.router.navigate(["/user-info/:id"]);
        }
        this.userInfo = result;
        console.log(this.userInfo);
      });
  }
}
