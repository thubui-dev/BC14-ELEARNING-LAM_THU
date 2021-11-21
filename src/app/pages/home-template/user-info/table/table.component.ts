import { Component, OnInit, Input, SimpleChange } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() infoCourse: any;
  constructor() {}

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  ngOnInit(): void {}
}
