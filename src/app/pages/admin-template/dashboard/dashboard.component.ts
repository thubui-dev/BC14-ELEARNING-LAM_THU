import { Component, OnInit } from "@angular/core";
import { DataService } from "@services/data.service";
import { Subscription } from "rxjs";
import { Router } from "@angular/router";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  searchUser: string;
  listUser: any;
  subListUser = new Subscription();
  constructor(private data: DataService, private route: Router) {
    this.searchUser = "";
    this.listUser = [];
  }

  ngOnInit(): void {
    this.getListUser();
  }

  getListUser() {
    this.subListUser = this.data
      .get("/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP02")
      .subscribe((result: any) => {
        this.listUser = result;
      });
  }

  fillEditUser(id: any) {
    this.route.navigate(['/admin/dashboard/quanlynguoidung'], { queryParams: { id } });
  }

  deleteListUser(id: any) {
    console.log("id", id);
    
    this.data
      .delete(`/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${id}`)
      .subscribe((result: any) => {
        this.listUser = this.listUser.filter((user: any) =>{
          if (user.id === id) {
           return false
          } else {
           return true
          }
        });
      });
  }
}
