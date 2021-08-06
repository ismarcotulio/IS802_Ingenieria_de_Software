import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

import { Product } from 'src/app/core/models/product/product-model';
import { ProductService } from 'src/app/core/services/product/product.service';


@Component({
  selector: 'app-wishlist-shelf',
  templateUrl: './wishlist-shelf.component.html',
  styleUrls: ['./wishlist-shelf.component.css']
})
export class WishlistShelfComponent implements AfterViewInit  {
  displayedColumns: string[] = ['Image', 'Name', 'Cost', 'Date_Product', 'Id'];
  products!: Product[]
  dataSource = new MatTableDataSource<Product>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private productService: ProductService){
    this.productService.getProducts("all").subscribe(
      data=> {
        console.log()
        this.dataSource.data = data
      }
    )
  }



  ngAfterViewInit() {


    this.dataSource.paginator = this.paginator;
  }

}
