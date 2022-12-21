import { Component, OnInit, Input } from '@angular/core';
import { ChartComponent } from './../chart/chart.component';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css'],
})
/**
 * Container of serveral ChartComponents in one row.
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @class ChartContainerComponent
 */
export class ChartContainerComponent implements OnInit {
  /**
   * Store chart list to show statistics in the Dashboard
   * @type {Array.<any>}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() chartList: any = [
    {
      options: {
        col_size: 8,
      },
      label: 'نمودار توزیع مطالب',
    },
    {
      options: {
        col_size: 4,
      },
      label: 'برترین هشتگ ها',
    },
  ];

  /**
   * Initialize the class when an instance of the class is created
   * @contstructor
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */
  constructor() {}
  /**
   * Execute when angular is loading
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */
  ngOnInit() {}
}
