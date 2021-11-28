import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  course: any = new BehaviorSubject({} as Object);
  shareCourse = this.course.asObservable();
  private user = new BehaviorSubject(JSON.parse(localStorage.getItem("UserAdmin") || "null"));
  constructor() { }

  sharingData(_course: any) {
    this.course.next(_course);
  }

  get userLogin() {
    return this.user;
  }

  set userLogin(info: any) {
    if (info) {
      localStorage.setItem("UserAdmin", JSON.stringify(info));
    } else {
      localStorage.removeItem("UserAdmin");
    }
    this.course.next(info);
  }
}
