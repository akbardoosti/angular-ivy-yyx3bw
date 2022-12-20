import { Component, OnInit, Input } from '@angular/core';
import { ChartComponent } from './../chart/chart.component';

@Component({
  selector: 'app-chart-container',
  templateUrl: './chart-container.component.html',
  styleUrls: ['./chart-container.component.css'],
})
export class ChartContainerComponent implements OnInit {
  @Input() options: any = { chart_colsize: '8' };
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

  constructor() {}

  ngOnInit() {}
}
