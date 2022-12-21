import {
  Component,
  OnInit,
  Input,
  Inject,
  PLATFORM_ID,
  NgZone,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
/**
 * Cart component in dashboard to show unique statistics
 * @author Akbar Doosti<wpx93.ir@gmail.com>
 * @class CartComponent
 */
export class CartComponent implements OnInit {
  /**
   * Store cart name in Persian language to show the user
   * @type {string}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() cartName: string;
  /**
   * Store number of Advertisements to show statistics to the user
   * @type {any}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() advertisementNumber: any;
  /**
   * Store cart name in English language to use their styles
   * @type {string}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() cartEn: string;
  /**
   * Store number of Posts to show statistics to the user
   * @type {any}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() postsCount: any;
  /**
   * Store source of Cart icon
   * @type {string}
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   * @public
   */
  @Input() cartImgSrc: string;

  /**
   * Initialize the class when an instance of the class is created
   * @contstructor
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone
  ) {}

  /**
   * Execute when angular is loading
   * @author  Akbar Doosti<wpx93.ir@gmail.com>
   */
  ngOnInit() {}
}
