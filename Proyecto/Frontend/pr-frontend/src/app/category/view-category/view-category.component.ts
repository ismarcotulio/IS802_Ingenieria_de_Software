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
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProducts(params["category"]).subscribe(
        data => {
          this.products = data;
        }
      )
    });
    try{
      if(this.route.parent?.parent?.snapshot.url[0].path == "user"){
        this.isUser = true
      }
    }catch(e){}

  }

}
