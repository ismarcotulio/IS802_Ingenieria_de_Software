import { Category } from './../../core/models/category/category-model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Product } from 'src/app/core/models/product/product-model';
import { ProductSearchService } from './../../core/services/product/product-search.service';
import { CATEGORIES } from 'src/app/core/models/category/category-mock-backend';

@Component({
  selector: 'app-view-home',
  templateUrl: './view-home.component.html',
  styleUrls: ['./view-home.component.css']
})
export class ViewHomeComponent implements OnInit {
  products: Product[] = [];
  categories: Category[] = [];
  constructor(
    private productService:ProductService,
    private productSearchService: ProductSearchService
  ) { }

  ngOnInit(): void {
    if(history.state.data){
      this.productSearchService.getProductsByKeyword(history.state.data.key).subscribe(
        data => {
          console.log(data)
          this.products = data
        }
      )

    }else{
      this.productService.getProducts("all").subscribe(
        data => {
          this.products = data
        }
      )
    }
    this.categories = CATEGORIES;
  }

  updateProducts(products:Product[]){
    this.products = products
  }

}
