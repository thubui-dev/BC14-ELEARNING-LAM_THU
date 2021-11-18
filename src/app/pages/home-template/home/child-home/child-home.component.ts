import { Component, OnInit, Input, SimpleChange } from '@angular/core';
import { ShareDataService } from 'src/app/_core/services/share-data.service';

@Component({
  selector: 'app-child-home',
  templateUrl: './child-home.component.html',
  styleUrls: ['./child-home.component.scss'],
})
export class ChildHomeComponent implements OnInit {
  @Input() cardCourses: any;
  constructor(private shareData: ShareDataService) {}

  ngOnChanges(changes: SimpleChange) {
    console.log(changes);
  }

  ngOnInit(): void {}
  xemNhanh1() {
    this.shareData.sharingData(this.cardCourses);
  }
}
