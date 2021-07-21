import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';

import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-post-ad',
  templateUrl: './post-ad.component.html',
  styleUrls: ['./post-ad.component.css']
})

export class PostAdComponent implements OnInit {
  public previsualizacion: any = '';

  formulario = new FormGroup({

    instagram: new FormControl(''),
    whatsapp: new FormControl(''),
    twitter: new FormControl(''),
    password: new FormControl('')


  });

  formPost = new FormGroup({
    
  });

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  send(){
    console.log('aaaa..');
  }

  capturarFile(event:any){

    const archivoCapturado = event.target.files[0]
    console.log(archivoCapturado);

    const unsafeImg = window.URL.createObjectURL(archivoCapturado);
    const image = this.sanitizer.bypassSecurityTrustUrl(unsafeImg);
    this.previsualizacion = image;
    
    console.log(this.previsualizacion);
    
  
  }

  guardar(){
    var fecha:Date = new Date();
    
    console.log(fecha);

  }

  borrarImg(){
    this.previsualizacion = '';
  }


}
