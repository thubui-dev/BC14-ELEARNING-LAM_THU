import { Component, OnInit, Input, SimpleChange } from "@angular/core";
import { DataService } from "@services/data.service";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  @Input() info: any;
  constructor(private dataService: DataService) {}

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  ngOnInit(): void {
    console.log(this.data);
    console.log(this.info);
  }

  deleteCourse(data: any) {
    console.log(data);

    this.dataService
      .post("api/QuanLyKhoaHoc/HuyGhiDanh", data)
      .subscribe((result: any) => {
        console.log(result);
      });
  }
}
