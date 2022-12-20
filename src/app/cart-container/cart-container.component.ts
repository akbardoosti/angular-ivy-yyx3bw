import { Component, OnInit, Input } from '@angular/core';
import { CartComponent } from './../cart/cart.component';

@Component({
  selector: 'app-cart-container',
  templateUrl: './cart-container.component.html',
  styleUrls: ['./cart-container.component.css'],
})
export class CartContainerComponent implements OnInit {
  @Input() sites: any[] = [
    {
      en_name: 'divar',
      fa_name: 'دیوار',
      img_src: 'https://yasinosint.ir/assets/img/divar/22.png',
      posts_count: 100,
      posts_number: 5436009706957054375965465466546546,
    },
    {
      en_name: 'sheypoor',
      fa_name: 'شیپور',
      img_src: 'https://yasinosint.ir/assets/img/sheypoor/3.png',
      posts_count: 100,
      posts_number: 45645640,
    },
    {
      en_name: 'bama',
      fa_name: 'باما',
      img_src: 'https://yasinosint.ir/assets/img/bama/Bama3.png',
      posts_count: 100,
      posts_number: 194564564654564,
    },
    {
      en_name: 'twitter',
      fa_name: 'توییتر',
      img_src: 'https://cdn-icons-png.flaticon.com/512/3256/3256013.png',
      posts_count: 100,
      posts_number: 1945645646545646578,
    },
  ];

  constructor() {}

  ngOnInit() {}
}