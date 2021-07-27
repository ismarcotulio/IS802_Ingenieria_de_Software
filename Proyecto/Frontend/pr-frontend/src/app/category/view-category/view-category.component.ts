import { ProductSearchService } from './../../core/services/product/product-search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product/product-model';
import { ProductService } from './../../core/services/product/product.service';


@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  products: Product[] = [];
  isUser = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
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
      this.route.params.subscribe(params => {
        this.productService.getProducts(params["category"]).subscribe(
          data => {
            this.products = data;
          }
        )
      });
    }
    try{
      if(this.route.parent?.parent?.snapshot.url[0].path == "user"){
        this.isUser = true
      }
    }catch(e){}

  }



}

