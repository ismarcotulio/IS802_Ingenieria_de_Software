import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product-model';

@Component({
  selector: 'app-product-shelf-default',
  templateUrl: './product-shelf-default.component.html',
  styleUrls: ['./product-shelf-default.component.css']
})
export class ProductShelfDefaultComponent implements OnInit {
  @Input() products: Product[] = [];
  constructor() { }

  ngOnInit(): void {}



}
