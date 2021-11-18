import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  constructor(private data: DataService) {}

  ngOnInit(): void {}

  addUser(user: any) {
    user.maLoaiNguoiDung = 'HV';
    user.maNhom = 'GP01';
    this.data
      .post('/api/QuanLyNguoiDung/ThemNguoiDung', user)
      .subscribe((result) => {
        console.log(result);
      });
  }
}
