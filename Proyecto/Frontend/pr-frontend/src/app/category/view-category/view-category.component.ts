import { ProductSearchService } from './../../core/services/product/product-search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/core/models/product/product-model';
import { ProductService } from './../../core/services/product/product.service';
import { DEPARTMENTS } from './../../core/models/department/department-mock-backend';


@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {

  products: Product[] = [];
  departments = DEPARTMENTS;
  selectedDepartment = "";
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

  optionSelect(event:any){
    if(event.target.value == 1){

      var bf = this.products.sort( (a,b) => {

          return new Date(b.Date_Product).getTime() - new Date(a.Date_Product).getTime();
      });

    }else if(event.target.value == 0){
      console.log('return');
      this.route.params.subscribe(params => {
        this.productService.getProducts(params["category"]).subscribe(
          data => {
            this.products = data;
          }
        )
      });
    }else if(event.target.value == 2){
      var bf = this.products.sort( (a,b) => {

        return b.Cost - a.Cost;
      });
    }else if(event.target.value == 3){
      var bf = this.products.sort( (a,b) => {

        return a.Cost - b.Cost;
      });
    }

  }

  getProductsByDepartmentAndCategory(url: string){
    this.route.params.subscribe(params => {
      this.productService.getProductsByDepartmentAndCategory(url, params["category"]).subscribe(
      data=>{
        this.products = data
      })
    })
  }

}

