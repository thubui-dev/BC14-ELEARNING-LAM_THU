import { Component, OnInit, Input, SimpleChange } from "@angular/core";

@Component({
  selector: "app-table",
  templateUrl: "./table.component.html",
  styleUrls: ["./table.component.scss"],
})
export class TableComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  ngOnInit(): void {}
}
