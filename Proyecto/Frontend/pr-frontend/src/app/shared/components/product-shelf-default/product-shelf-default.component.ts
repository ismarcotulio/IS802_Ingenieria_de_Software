import { ProductService } from './../../../core/services/product/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product-model';

@Component({
  selector: 'app-product-shelf-default',
  templateUrl: './product-shelf-default.component.html',
  styleUrls: ['./product-shelf-default.component.css']
})
export class ProductShelfDefaultComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

}
