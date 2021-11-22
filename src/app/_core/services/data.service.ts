import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { tap, catchError } from "rxjs/operators";
import { environment } from "../../../environments/environment";

let urlApi = "";

@Injectable({
  providedIn: "root",
})
export class DataService {
  constructor(private http: HttpClient) {
    urlApi = environment.urlApi;
  }

  get(uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  post(uri: any, data: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    return this.http.post(url, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  put(uri: any, data: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    return this.http.put(url, data).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  delete(uri: any): Observable<any> {
    const url = `${urlApi}/${uri}`;
    return this.http.delete(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  getListCourse(): Observable<any> {
    const url =
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01";
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  getListCourseCard(): Observable<any> {
    const url =
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=1&pageSize=10&MaNhom=GP01";
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  getMenuCourses(): Observable<any> {
    const url =
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc";
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  getDetailCourse(id: any): Observable<any> {
    const url = `https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`;
    return this.http.get(url).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  postRegisterCourses(courses: any): Observable<any> {
    const url =
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc";
    return this.http.post(url, courses).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  renderInfoCourse(info: any): Observable<any> {
    const url =
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung";
    return this.http.post(url, info).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  registerUser(user: any): Observable<any> {
    const url =
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy";
    return this.http.post(url, user).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }
  addUser(user: any): Observable<any> {
    const url =
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung";
    return this.http.post(url, user).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  loginAuth(user: any): Observable<any> {
    const url =
      "https://elearningnew.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap";
    return this.http.post(url, user).pipe(
      tap(() => {}),
      catchError((error: any) => {
        return this.handleError(error);
      })
    );
  }

  handleError(error: any) {
    switch (error.status) {
      case 300:
        break;

      case 400:
        break;

      case 500:
        break;

      default:
        break;
    }
    return throwError(error);
  }
}
