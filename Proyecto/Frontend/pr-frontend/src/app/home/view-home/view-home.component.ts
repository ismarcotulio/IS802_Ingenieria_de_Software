import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/core/models/product/product-model';
import { ProductSearchService } from './../../core/services/product/product-search.service';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private productService:ProductService,
    private productSearchService: ProductSearchService
  ) { }

  ngOnInit(): void {
    if(history.state.data){
      this.products =this.productSearchService.getProductsByKeyword()

    }else{
      this.products = this.productService.getAllProducts();
    }
  }

  updateProducts(products:Product[]){
    this.products = products
  }

}
