import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Videosp } from '../models/interface-video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  URL4='http://localhost:3000';

  constructor(private http1:HttpClient) { }

  listVideos(){
    return this.http1.get(`${this.URL4}/Videos`)
  }

  listVideo(id:string){
    return this.http1.get(`${this.URL4}/Videos/${id}`)
  }

  deleteVideos(id:string){
    return this.http1.delete(`${this.URL4}/Videos/${id}`)
  }

  guardarVideo(vid:Videosp){
    return this.http1.post(`${this.URL4}`,vid)
  }



}
