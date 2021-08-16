import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { CategoriesService } from '../../services/categories/categories.service';
import { categoria } from '../../models/categories-model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  imgNewCategory:any = "";
  apiKey:string = '75943c91956dc2c5547f00e2352336c1';
  formb = new FormData();
  urlImg:any;
  nameCategory= "";
  descriptionCategory = "";
  viewContAddCategory = false;
  constructor(private sanitizer: DomSanitizer, private httpClient:HttpClient,private categoriesService:CategoriesService) { }
  categoriesActive:categoria [] =[];
  categoriesDelete:categoria [] =[];


  ngOnInit(): void {


  
    this.categoriesService.getCategories().subscribe(result =>{
      // console.log(result);
      this.actualizarTablas(result);
      
    })
    
  }

  captImgCategory(event:any){
    let imgCapturada = event.target.files[0];

    const unsafeImg = window.URL.createObjectURL(imgCapturada);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);

    this.imgNewCategory = image;
    this.formb.append('image',imgCapturada);
    
  }

  saveCategory(){
    
    let idCat = this.categoriesActive.length + this.categoriesDelete.length + 1;
    // console.log(id);
    
    if(this.imgNewCategory == ""){
      
      alert('Ingrese una imagen');
    }else{
      if(this.nameCategory == ""){
        alert('Ingrese un nombre para la categoria');
      }else{
        /* Agregamos imagen al servidor y datos */
        this.httpClient.post('/api',this.formb,{params:{key: this.apiKey} }, ).subscribe(resp =>{
          this.urlImg = resp;
          const urll = this.urlImg['data'].url;
          
          this.categoriesService.setNuevaCategoria({id:idCat,nombreCategoria:this.nameCategory,descripcion:this.descriptionCategory,url:urll}).subscribe(result =>{
            // console.log(result);
             
          })
          

          this.nameCategory = '';
        });
        this.viewContNewCategory();
      }
    }
    
  }

  /* Ver Div contenedor de la opcion de agregar categoria */
  viewContNewCategory(){
    if(this.viewContAddCategory){
      this.viewContAddCategory = false;
    }else{
      this.viewContAddCategory = true;
    }
  }

  darBaja(id:string){
    

    this.categoriesService.deleteCategorie({category:id,status:0}).subscribe(result =>{
      // console.log(result);

      this.ngOnInit();
      
    })
  }

  actualizarTablas(categories:categoria[]){
    this.categoriesDelete = [];
    this.categoriesActive = [];
    
    categories.forEach(categorie => {
      if(categorie.Status == "0"){
        this.categoriesDelete.push(categorie);
        
      }else{
        this.categoriesActive.push(categorie);

      } 
    });
    console.log(this.categoriesDelete);
    console.log(this.categoriesActive);
  }


  activarBaja(id:string){

    this.categoriesService.deleteCategorie({category:id,status:1}).subscribe(result =>{
      this.ngOnInit();
    });
  }
}
