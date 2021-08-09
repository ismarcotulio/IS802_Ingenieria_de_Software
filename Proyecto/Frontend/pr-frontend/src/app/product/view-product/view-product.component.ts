import { WishlistService } from './../../core/services/wishlist/wishlist.service';
import { Product } from './../../core/models/product/product-model';
import { UserProduct, commentProduct } from './../../core/models/product/user-product-model';
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
  addComment = 'none';
  imgUser = 'assets/imgs/perfilComment.jpg';
  isUser = false;
  myComment = '';
  commentsProducto:commentProduct[] = [];
  viewModal = 'none';
  commentReport = '';
  optionSelectReport = 0;

  product!: UserProduct;
  wishProductState = false;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private wishlistService: WishlistService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productService.getProduct(params["product"]).subscribe(
        data => {
          this.product = data;

          this.productService.getCommentsProduct(this.product.Id).subscribe(comments =>{
              this.commentsProducto = comments;
              this.clearDateComments();
          });

          this.wishlistService.verifyWish(this.product.Id).subscribe(
            data => { this.wishProductState = data }
          )
        }
        )
      });

      try{
        if(this.route.parent?.parent?.snapshot.url[0].path == "user"){
          this.isUser = true
        }
      }catch(e){}





  }

  viewAddNewComment(){
    if(this.addComment == 'none'){
      this.addComment ='block'
    }else{
      this.addComment ='none'
    }
  }

  addNewComment(){
    // console.log(this.myComment);
    this.productService.setNewCommentProduct({comment:this.myComment,typeComment:'product',productId:this.product.Id}).subscribe(res => {
      // console.log(res);
      if(res){
        // alert('Comentario realizado exitosamente.')
        this.productService.getCommentsProduct(this.product.Id).subscribe(comments =>{
          this.commentsProducto = comments;
          this.clearDateComments();
        });
      }
    });

    this.myComment = '';
  }


  clearDateComments(){
    let cont = 0;
    this.commentsProducto.forEach(comment => {
      let tempDate = `${comment.Date_Comment}`;
      var clearDate = tempDate.split('-');
      var clearDay = clearDate[2].split('T')[0];
      let newDate = `${clearDay}/${clearDate[1]}/${clearDate[0]}`;
      this.commentsProducto[cont].Date_Comment = newDate;
      cont= cont+ 1;

    });
  }

  openCommentsDialog() {
    const dialogRef = this.dialog.open(CommentsDialogComponent, {
      data: {
        Id_Seller: this.product.Id_User
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  openModal(){
    if(this.viewModal == 'none'){
      this.viewModal = 'block';
    }else{
      this.viewModal = 'none';
    }
  }

  optionReport(event:any){
    this.optionSelectReport = event.target.value;
  }

  createReport(){
    if(this.optionSelectReport == 0){
      alert("Seleccione el tipo de denuncia, para continuar.");
    }else{
      let dataReport = {Id_ComplaintType: this.optionSelectReport,
        Optional_Comment: this.commentReport,
        Id_Denounced: this.product.Id_User
      }

      this.productService.setNewReport(dataReport).subscribe(res =>{
        console.log(res);

      });
      this.viewModal = 'none';
      this.commentReport = '';
    }

  }

  addWish(){
    this.wishlistService.addWish(this.product.Id).subscribe(
      data => {
        console.log(data)
        this.wishProductState = data
      }
    )
  }

  removeWish(){
    this.wishlistService.removeWish(this.product.Id).subscribe(
      data => {
        console.log(data)
        this.wishProductState = !data
      }
    )
  }
}
