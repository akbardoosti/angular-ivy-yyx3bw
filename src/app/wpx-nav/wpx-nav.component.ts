import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wpx-nav',
  templateUrl: './wpx-nav.component.html',
  styleUrls: ['./wpx-nav.component.css'],
})
export class WpxNavComponent implements OnInit {
  @Input() itemList: Array<object> = [];
  count: number = 0;
  constructor() {}

  ngOnInit() {
    console.log(this.itemList);
  }

  navButtonClick() {
    console.log(this);
  }

  isItemListEmpty(): boolean {
    if (typeof this.itemList != 'undefined' && this.itemList.length != 0) {
      return false;
    }
    return true;
  }
}
