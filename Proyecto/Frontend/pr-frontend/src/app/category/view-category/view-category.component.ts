import { Categories } from './../../core/models/product/product-model';
import { ProductSearchService } from './../../core/services/product/product-search.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product} from 'src/app/core/models/product/product-model';
import { ProductService } from './../../core/services/product/product.service';
import { DEPARTMENTS } from './../../core/models/department/department-mock-backend';
import { CategoriesService } from 'src/app/core/services/categories/categories.service';

@Component({
  selector: 'app-view-category',
  templateUrl: './view-category.component.html',
  styleUrls: ['./view-category.component.css']
})
export class ViewCategoryComponent implements OnInit {
  userSubscribe:boolean = false;
  products: Product[] = [];
  departments = DEPARTMENTS;
  selectedDepartment = "";
  selectedCategory = "";
  isUser = false;
  openDialog = false;
  listCategories:Categories[] = [];
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private productSearchService: ProductSearchService,
    private categoriesService: CategoriesService
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
        this.selectedCategory = params["category"];
        this.productService.getProducts(params["category"]).subscribe(
          data => {
            this.products = data;
          }
        )
        this.loadCategories();
        this.verificarEstadoSuscripcion();
      });
    }
    try{
      if(this.route.parent?.parent?.snapshot.url[0].path == "user"){
        this.isUser = true
      }
    }catch(e){}

    // this.verificarEstadoSuscripcion();
    
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

  deleteSubscription(){
    
    // this.userSubscribe = false;
    this.closeOpenDialog();

    // console.log(this.categoriaActual());
    
    
    this.productService.removeSubscription({Id_Category_FK:Number(this.categoriaActual())}).subscribe(result =>{
      // console.log(result,"delete");
      this.verificarEstadoSuscripcion();
      this.ngOnInit();
    });

  }
  
  userSubscribeCategory(){
    // this.userSubscribe = true;
    let optionCategory =1;
    // let categorys = ["tecnologia","arte-artesania","hogar","automotriz","salud-belleza","deportes","jugueteria","mascotas","ropa"];
    for(let i=0;i<this.listCategories.length;i++){
      if(this.selectedCategory == this.listCategories[i].Name){
        optionCategory = this.listCategories[i].Id;
      }
    }
    
    this.productService.setNewSubscription({Id_Category_FK:optionCategory}).subscribe(result =>{
      this.verificarEstadoSuscripcion();
      // console.log(result);
    });

    
  }
  
  closeOpenDialog(){
    if(this.openDialog){
      this.openDialog = false
    }else{

      this.openDialog = true;
    }
    
  }
  
  verificarEstadoSuscripcion(){
    let optionCategory =1;
    // let categorys = ["tecnologia","arte-artesania","hogar","automotriz","salud-belleza","deportes","jugueteria","mascotas","ropa"];
    
    for(let i=0;i<this.listCategories.length;i++){
      if(this.selectedCategory == this.listCategories[i].Name){      
        
        optionCategory = this.listCategories[i].Id;
      }
    }
    
    
    this.productService.getStateSubscription({Id_Category_FK:optionCategory}).subscribe(results =>{
      console.log("entro....");
      
      console.log(results);
      this.userSubscribe = Boolean(results);
      
    });
  }

  categoriaActual(){
    let optionCategory =1;
    // let categorys = ["tecnologia","arte-artesania","hogar","automotriz","salud-belleza","deportes","jugueteria","mascotas","ropa"];
    
    for(let i=0;i<this.listCategories.length;i++){
      if(this.selectedCategory == this.listCategories[i].Name){      
        
        optionCategory = this.listCategories[i].Id;
      }
    }

    return optionCategory;
  }

  loadCategories(){
    this.categoriesService.getCategories().subscribe(result =>{
      for (let i = 0; i < result.length; i++) {
        if(result[i].Status == 1){
          this.listCategories.push(result[i]);
        }
      }
      
    })
  }
  
  
}

