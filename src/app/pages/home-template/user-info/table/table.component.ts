import { Component, OnInit, Input, SimpleChange } from "@angular/core";
import { DataService } from "@services/data.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  ngOnInit(): void {}

  deleteCourse(course: any) {
    console.log(course);

    this.dataService
      .post("api/QuanLyKhoaHoc/HuyGhiDanh", course)
      .subscribe((result: any) => {
        console.log(result);
      });
  }
}
