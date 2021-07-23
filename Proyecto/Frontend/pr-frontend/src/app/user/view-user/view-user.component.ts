import { Product } from 'src/app/core/models/product/product-model';
import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/core/services/product/product.service';
import { ProductSearchService } from './../../core/services/product/product-search.service';
import { CATEGORIES } from './../../core/models/category/category-mock-backend';
import { Category } from './../../core/models/category/category-model';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];

  constructor(
    private productService: ProductService,
    private productSearchService: ProductSearchService
  ) { }

  ngOnInit(): void {
    if(history.state.data){
      this.products =this.productSearchService.getProductsByKeyword()

    }else{
      this.productService.getProducts("all").subscribe(
        data => {
          this.products = data
          console.log(data)
        }
      )
    }
    this.categories = CATEGORIES;
  }

  updateProducts(products:Product[]){
    this.products = products
  }

}
