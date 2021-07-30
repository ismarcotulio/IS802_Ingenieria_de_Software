import { UserProduct } from './../../core/models/product/user-product-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../core/services/product/product.service';
import { MatDialog } from '@angular/material/dialog';
import { CommentsDialogComponent } from './../components/comments-dialog/comments-dialog.component';


@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  isUser = false;

  product: UserProduct = { Id: 7,
  Name: "Maletin",
  Brand: "Nike",
  Cost: 1000,
  Description: "Para salir de viaje preparado",
  Id_Category: 9,
  Image: "https://i.ibb.co/xHYNb2k/Maletin-Nike.jpg",
  Date_Product: "2021-07-07T06:00:00.000Z",
  Id_State: 1,
  Id_Department: 1,
  Id_User: 2,
  Firts_Name: "Pedro",
  Last_Name: "Martinez",
  Email: "PedroM@email.com",
  Address: "Col. San Miguel"}

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProduct(params["product"]).subscribe(
        data => {
          this.product = data;
        }
      )
    });

    try{
      if(this.route.parent?.parent?.snapshot.url[0].path == "user"){
        this.isUser = true
      }
    }catch(e){}
  }

  openCommentsDialog() {
    const dialogRef = this.dialog.open(CommentsDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}
