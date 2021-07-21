import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup, Validators } from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})

export class PostAdComponent implements OnInit {
  public previsualizacion: any = '';
  urls:any;
  public archivoCap:any;

  apiKey:string = '75943c91956dc2c5547f00e2352336c1';

  // formulario = new FormGroup({

  //   instagram: new FormControl(''),
  //   whatsapp: new FormControl(''),
  //   twitter: new FormControl(''),
  //   password: new FormControl('')
  // });

  formPost = new FormGroup({
    state: new FormControl('', ),
    description: new FormControl(''),
    name: new FormControl('',Validators.maxLength(25))
  });

  constructor(private sanitizer: DomSanitizer, private httpClient:HttpClient) { }

  ngOnInit(): void {
  }

  send(){
    console.log('aaaa..');
  }

  capturarFile(event:any){

    const archivoCapturado = event.target.files[0]
    console.log(archivoCapturado);
    this.archivoCap = archivoCapturado;
    const unsafeImg = window.URL.createObjectURL(archivoCapturado);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    this.previsualizacion = image;
    
    // console.log(this.previsualizacion);
    

  
    const fb = new FormData();
    let headers = new Headers({'authorization':'Client-ID clientid'})
    // fb.append
    
    fb.append('image',archivoCapturado);

    this.httpClient.post('/api',fb,{params:{key: this.apiKey} }, ).subscribe(resp =>{
      this.urls = resp;
      console.log(resp);
    });
  }

  
  guardar(){
    var fecha:Date = new Date();
    
    console.log(fecha);

    this.urls['data']
    console.log(this.urls['data'].url);
    
    

  }
  

  borrarImg(){
    this.previsualizacion = '';
  }

  optionDepartament(event:any){
    console.log(event.target.value);
  }

  optioncategory(event: any){
    console.log(event.target.value);
    
  }
}
