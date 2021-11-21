import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { DataService } from "src/app/_core/services/data.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-adduser",
  templateUrl: "./adduser.component.html",
  styleUrls: ["./adduser.component.scss"],
})
export class AdduserComponent implements OnInit {
  id: any;
  item: any;
  sub: any;
  constructor(
    private data: DataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.sub = this.route.queryParams.subscribe((params: any) => {
      console.log(params);
      
      this.id = params["id"];
      console.log("id", this.id);
      
    });
  }

  addUser(user: any) {
    user.maLoaiNguoiDung = "HV";
    user.maNhom = "GP01";
    this.data
      .post("api/QuanLyNguoiDung/ThemNguoiDung", user)
      .subscribe((result) => {
        this.router.navigate(["/admin/dashboard"]);
        this.item = result;
      });
  }
}
