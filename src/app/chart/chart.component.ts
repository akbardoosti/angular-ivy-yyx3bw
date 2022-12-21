import { Component, OnInit, Input } from '@angular/core';
import { ChartHeaderComponent } from './../chart-header/chart-header.component';
import { ChartBodyComponent } from './../chart-body/chart-body.component';
import { ChartFooterComponent } from './../chart-footer/chart-footer.component';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit {
  @Input() chartLabel: any;
  @Input() siteList: Array<number> = [1, 2, 3];
  @Input() isHeaderTab: boolean = true;
  @Input() headerOptions: Array<object>;

  constructor() {}
/**
   * Initialize the class when an instance of the class is created
   * @contstructor
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */

 /**
  * Execute when angular is loading
  * @author  Akbar Doosti<wpx93.ir@gmail.com>
  * @return {void}
  */
  ngOnInit() {}
}
