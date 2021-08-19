import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';
import { PostAdService } from './service/post-ad.service';
import { CategoriesService } from '../core/services/categories/categories.service';

@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})

export class PostAdComponent implements OnInit {
  public previsualizacion: any = '';
  urls:any;
  fechaPublicacion:string = '';
  fb = new FormData();
  apiKey:string = '75943c91956dc2c5547f00e2352336c1';

  /* formulario = new FormGroup({
    instagram: new FormControl(''),
    whatsapp: new FormControl(''),
    twitter: new FormControl(''),
    password: new FormControl('')
  }); */

  formPost = new FormGroup({
    state: new FormControl('',[Validators.required]),
    Brand: new FormControl('',[Validators.required, Validators.maxLength(30)]),
    Description: new FormControl('',[Validators.required, Validators.maxLength(50)]),
    Name: new FormControl('',Validators.maxLength(30)),
    Depart: new FormControl('0',[Validators.required]),
    Id_Category: new FormControl('0',[Validators.required]),
    Cost: new FormControl('', Validators.maxLength(8))
  });

  categorias = [{Id:"",Name:""}];

  constructor(private sanitizer: DomSanitizer, private httpClient:HttpClient, private servicePost:PostAdService,private categoriasService:CategoriesService) { }

  ngOnInit(): void {

    this.categoriasService.getCategories().subscribe(result =>{

      
      for (let i = 0; i < result.length; i++) {
        if(result[i].Status == 1){
          this.categorias.push(result[i]);
        }
        
      }
      this.categorias.shift();
      
    })
  }

  send(){
    console.log('aaaa..');
  }

  capturarFile(event:any){

    const archivoCapturado = event.target.files[0]
    // console.log(archivoCapturado);

    const unsafeImg = window.URL.createObjectURL(archivoCapturado);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    this.previsualizacion = image;
    
    this.fb.append('image',archivoCapturado);
    
  }
  
  
  guardar(){
    
    var fecha:Date = new Date();
    //capturando la fecha de la publicacion
    this.fechaPublicacion = fecha.toLocaleDateString();

    var dateNow = this.fechaPublicacion.split('/');

    this.fechaPublicacion = `${dateNow[2]}-${dateNow[1]}-${dateNow[0]}`;
    
    this.httpClient.post('/api',this.fb,{params:{key: this.apiKey} }, ).subscribe(resp =>{
      this.urls = resp;
      const url = this.urls['data'].url;
      // console.log(aa); //imprime la url de la imagen
      
      
      this.servicePost.guardPostAd(this.formPost,url,this.fechaPublicacion).subscribe(res =>{
        console.log(res);
      });

      alert('Anuncio Publicado.');
      
    });
    
  }
  
  get category(){
    return this.formPost.get('Id_Category')?.value;
  }

  get departament(){
    return this.formPost.get('Depart')?.value;
  }

  borrarImg(){
    this.previsualizacion = '';
  }

  
}
