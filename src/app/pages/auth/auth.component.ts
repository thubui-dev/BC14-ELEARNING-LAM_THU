import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements OnInit {
  constructor(private data: DataService, private router: Router) {}

  ngOnInit(): void {}

  login(user: any) {
    this.data
      .post('/api/QuanLyNguoiDung/DangNhap', user)
      .subscribe((result: any) => {
        if (result.maLoaiNguoiDung === 'GV') {
          // Lưu trạng thái xuông local Store
          localStorage.setItem('UserAdmin', JSON.stringify(result));

          // Chuyển Hướng
          this.router.navigate(['/admin/dashboard']);
        } else {
          alert('TK không hợp lệ');
        }
        console.log(result);
      });
  }
}
