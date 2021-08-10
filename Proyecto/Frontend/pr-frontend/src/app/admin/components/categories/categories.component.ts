import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
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
  viewContAddCategory = false;
  constructor(private sanitizer: DomSanitizer, private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  captImgCategory(event:any){
    let imgCapturada = event.target.files[0];

    const unsafeImg = window.URL.createObjectURL(imgCapturada);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);

    this.imgNewCategory = image;
    this.formb.append('image',imgCapturada);
    
  }

  saveCategory(){
    
    if(this.imgNewCategory == ""){
      
      alert('Ingrese una imagen');
    }else{
      if(this.nameCategory == ""){
        alert('Ingrese un nombre para la categoria');
      }else{
        /* Agregamos imagen al servidor y datos */
        this.httpClient.post('/api',this.formb,{params:{key: this.apiKey} }, ).subscribe(resp =>{
          this.urlImg = resp;
          const url = this.urlImg['data'].url;
          
          console.log(url);
          console.log(this.nameCategory);
          

          this.nameCategory = '';
          this.viewContNewCategory();
        });
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

}
