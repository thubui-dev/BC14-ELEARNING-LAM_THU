import { Component, OnInit } from "@angular/core";
import { DataService } from "@services/data.service";
import { Router } from "@angular/router";
import { ActivatedRoute } from "@angular/router";
import { HttpEventType } from "@angular/common/http";

@Component({
  selector: "app-add-course",
  templateUrl: "./add-course.component.html",
  styleUrls: ["./add-course.component.scss"],
})
export class AddCourseComponent implements OnInit {
  danhMucKhoaHoc: any;
  list: any;
  error: any;
  subgetCourse: any;
  courseEdit = {
    nguoiTao: "",
    danhMucKhoaHoc: "",
    luotXem: "",
    danhGia: "",
    hinhAnh: "",
    tenKhoaHoc: "",
    maKhoaHoc: "",
  };

  id: any;
  data: any;
  selectedFile: any;
  getFile: any;

  constructor(
    private dataService: DataService,
    private route: Router,
    private routeAct: ActivatedRoute,
  ) {}
  
  ngOnInit(): void {
    this.subgetCourse = this.routeAct.queryParams.subscribe((params: any) => {
      this.id = params["maKhoaHoc"];
      if (this.id) {
        this.dataService
          .get(`api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${this.id}`)
          .subscribe({
            next: (result) => {
              this.courseEdit = result;
            },
            error: (error) => {
              this.error = error;
            },
          });
      }
    });

    this.getCourse();
  }

  getCourse() {
    this.subgetCourse = this.dataService
      .get("/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc")
      .subscribe((result: any) => {
        this.danhMucKhoaHoc = result;
      });
  }

  addCourse(value: any) {
    this.onUpload();
    if (!this.id) {
      this.dataService
        .post("api/QuanLyKhoaHoc/ThemKhoaHoc", value)
        .subscribe((result) => {
          this.route.navigate(["/admin/admin-course"]);
          this.list = result;
        });
    } else {
      value.maKhoaHoc = this.courseEdit.maKhoaHoc;
      this.dataService
        .put("api/QuanLyKhoaHoc/CapNhatKhoaHoc", value)
        .subscribe({
          next: (result) => {
            this.route.navigate(["/admin/admin-course"]);
            this.list = result;
          },
          error: (error) => {
            console.log(error);
          },
        });
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = <File>event.target.files[0];
    this.getFile = URL.createObjectURL(this.selectedFile);
  }



  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name)
    this.dataService.post('/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc', fd, {
      reportProgress: true,
      observe: 'event'
    })
      .subscribe(event => {
        if(event.type === HttpEventType.UploadProgress) {
          // console.log('Upload Progess' + Math.round(event.loaded)/ event.total * 100)  +'%') ;
          
        } else if (event.type === HttpEventType.Response) {
          console.log(event);
        }
      })
  }
}
