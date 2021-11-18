import { Component, OnInit, Input } from '@angular/core';
import { DataService } from 'src/app/_core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar-home',
  templateUrl: './navbar-home.component.html',
  styleUrls: ['./navbar-home.component.scss'],
})
export class NavbarHomeComponent implements OnInit {
  menuCourses: any;
  subListCourse = new Subscription();

  constructor(private data: DataService) {}

  ngOnInit(): void {
    this.getMenuCourses();
  }
  getMenuCourses() {
    this.data.getMenuCourses().subscribe((result: any) => {
      console.log(result);
      this.menuCourses = result;
    });
  }
  ngOnDestroy() {
    this.subListCourse.unsubscribe();
  }
}
