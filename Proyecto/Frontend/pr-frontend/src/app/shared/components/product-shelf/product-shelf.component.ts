import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product-model';

@Component({
  selector: 'app-product-shelf',
  templateUrl: './product-shelf.component.html',
  styleUrls: ['./product-shelf.component.css']
})
export class ProductShelfComponent implements OnInit {

  constructor() { }

  @Input() products: Product[] = [];


  ngOnInit(): void {}

}
