import { AllProduct } from './../../core/models/product/user-product-model';
import { ProductService } from 'src/app/core/services/product/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  products!: AllProduct[]
  pageSlices!:any;
  startIndex = 0;
  endIndex = 4;

  constructor(

    private productService:ProductService
  ) { }

  ngOnInit(): void {
    this.getUserProducts()
  }

  getUserProducts(){
    this.productService.getUserProducts().subscribe(
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

  changeState(idProduct:number, currentState: string){
    var state = 1
    if(currentState == "ACTIVO"){
      state = 2
    }
    this.productService.downProduct(idProduct, state).subscribe(
      data => {
        this.getUserProducts()
      }
    )
  }

}


