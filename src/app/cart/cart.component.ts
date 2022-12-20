import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  //
  @Input() cartname: string;
  @Input() posts_number: any;
  @Input() cart_en: string;
  @Input() posts_count: any;
  @Input() car_img_src: string;
  constructor() {}

  ngOnInit() {}
}
