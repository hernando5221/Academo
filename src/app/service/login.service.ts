import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  URL5='http://localhost:3000';
  constructor(private http3:HttpClient) { }

  listlogin(user:string){
    return this.http3.get(`${this.URL5}/administrador/${user}`)
  }
}
