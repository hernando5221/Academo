import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Imagen} from '../models/interface-imagen'


@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  URL3='http://localhost:3000';

  constructor(private http:HttpClient) { }


  //CRUD
  listImgs(){
    return this.http.get(`${this.URL3}/imagenes`)
  }

  listImg(id:string){
    return this.http.get(`${this.URL3}/imagenes/${id}`)
  }

  deleteImg(id:string){
    return this.http.delete(`${this.URL3}/imagenes/${id}`)
  }

  saveImg(imag:Imagen){
    return this.http.post(`${this.URL3}/imagenes`,imag)
  }
}
