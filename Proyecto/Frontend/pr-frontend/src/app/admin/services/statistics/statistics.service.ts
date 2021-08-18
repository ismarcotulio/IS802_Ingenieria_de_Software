import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private http:HttpClient) { }


  setNewTimePost(data:any){
    return this.http.put("http://localhost:3000/tiempoAnuncios",data);
  }
}
