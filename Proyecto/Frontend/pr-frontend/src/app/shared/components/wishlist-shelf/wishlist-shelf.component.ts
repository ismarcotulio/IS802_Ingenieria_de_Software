import { WishProduct } from './../../../core/models/product/user-product-model';
import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { WishlistService } from 'src/app/core/services/wishlist/wishlist.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-wishlist-shelf',
  templateUrl: './wishlist-shelf.component.html',
  styleUrls: ['./wishlist-shelf.component.css']
})
export class WishlistShelfComponent implements AfterViewInit  {
  displayedColumns: string[] = ['Image', 'Name', 'Cost', 'Date_Product', 'Id'];
  products!: WishProduct[]
  dataSource = new MatTableDataSource<WishProduct>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  tableState = false
  table:any

  constructor(private wishlistService: WishlistService, private router:Router){
    this.getWishes()
  }



  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    if(this.dataSource.data.length > 0){
      this.tableState = true
    }
  }

  getWishes(){
    this.wishlistService.getWishes().subscribe(
      data=> {
        this.dataSource.data = data
        if(this.dataSource.data.length > 0){
          this.tableState = true
        }else{
          this.tableState = false
        }
      }
    )
  }

  removeWish(idProduct:number){
    this.wishlistService.removeWish(idProduct).subscribe(data=>{
      this.getWishes()
    })
  }

}
