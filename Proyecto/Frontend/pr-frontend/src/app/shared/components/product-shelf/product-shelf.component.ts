import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/core/models/product/product-model';
import { ProductService } from './../../../core/services/product/product.service';

@Component({
  selector: 'app-product-shelf',
  templateUrl: './product-shelf.component.html',
  styleUrls: ['./product-shelf.component.css']
})
export class ProductShelfComponent implements OnInit {
  products: Product[] = [];
  constructor(private productService: ProductService) { }



  ngOnInit(): void {
    this.products = this.productService.getAllProducts();
  }

}
