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
  startIndex = 0;
  endIndex = 9

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
        this.pageSlices = this.products.slice(this.startIndex, this.endIndex)
      }
    )
  }

  onChangePage(event:any){
    this.startIndex = event.pageIndex * event.pageSize;
    this.endIndex = this.startIndex + event.pageSize;
    if(this.endIndex > this.products.length){
      this.endIndex = this.products.length;
    }
    this.pageSlices = this.products.slice(this.startIndex, this.endIndex)
  }

  changeState(productId: number){
    this.productService.downProduct(productId, 2).subscribe(
      data => {
        console.log(data)
        this.getUserProducts()
      }
    )

  }

}
