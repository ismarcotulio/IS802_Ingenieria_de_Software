import { Product } from 'src/app/core/models/product/product-model';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products!: Product[]
  pageSlices!:any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit(): void {
    this.getUserProducts()
  }

  getUserProducts(){
    this.productService.getProducts("all").subscribe(
      data=>{
        console.log(data)
        this.products = data
        this.pageSlices = this.products.slice(0,9)
      }
    )
  }

  onChangePage(event:any){
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if(endIndex > this.products.length){
      endIndex = this.products.length;
    }
    this.pageSlices = this.products.slice(startIndex, endIndex)
  }

}
