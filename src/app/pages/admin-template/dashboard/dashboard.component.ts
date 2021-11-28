import { Component, OnInit } from "@angular/core";
import { DataService } from "@services/data.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";
import { ShareDataService } from "@services/share-data.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  searchUser: string;
  listUser: any;
  subListUser = new Subscription();
  currentAccount = '';

  userLogin: any;
  constructor(private data: DataService, private route: Router, private share: ShareDataService) {
    this.searchUser = "";
    this.listUser = [];
  }

  ngOnInit(): void {
    this.getListUser();
    this.share.userLogin.subscribe({
      next: (result: any) => {
        this.userLogin = result;
      }
    });
  }

  getListUser() {
    this.subListUser = this.data
      .get("/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP02")
      .subscribe((result: any) => {
        this.listUser = result;
      });
  }

  fillEditUser(data: any) {
    this.route.navigate(["/admin/dashboard/quanlynguoidung"], {
      queryParams: { taiKhoan: data.taiKhoan, matKhau: data.matKhau },
    });
  }

  selectAccount(account: string) {
    // this.currentAccount = account;
    this.route.navigate(["/admin/dashboard"], {
      queryParams: {
        taiKhoan: account
      }
    });
  }

  deleteListUser(id: any) {
    console.log("id", id);

    this.data
      .delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .subscribe((result: any) => {
        this.listUser = this.listUser.filter((user: any) => {
          if (user.id === id) {
            return false;
          } else {
            return true;
          }
        });
      });
  }
}
