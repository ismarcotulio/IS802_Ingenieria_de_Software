import { UserProduct, commentProduct } from './../../core/models/product/user-product-model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from './../../core/services/product/product.service';


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
    private productService: ProductService
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
}
