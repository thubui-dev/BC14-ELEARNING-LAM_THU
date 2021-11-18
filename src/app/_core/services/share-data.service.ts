import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShareDataService {
  course: any = new BehaviorSubject({} as Object);
  shareCourse = this.course.asObservable();

  constructor() {}

  sharingData(_course: any) {
    this.course.next(_course);
  }
}
