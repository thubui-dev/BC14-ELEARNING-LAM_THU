import { Component, OnInit } from '@angular/core';
import { DataService } from '@services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.scss'],
})
export class ListCourseComponent implements OnInit {
  p: number = 1;
  listCourse: any;
  subListCourse = new Subscription();
  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getCourse();
  }

  getCourse() {
    this.subListCourse = this.data
      .get('/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01')
      .subscribe((result: any) => {
        console.log(result);
        this.listCourse = result;
      });
  }

  ngOnDestroy() {
    this.subListCourse.unsubscribe();
  }
}
