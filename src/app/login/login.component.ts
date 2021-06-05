import { Component, OnInit } from '@angular/core';

//login
import {FormGroup,FormControl,Validators  } from '@angular/forms'
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    usuario : new FormControl('',Validators.required ),
    password : new FormControl('',Validators.required ),
  })

  public compararlogin:any=[];
  public compararapi:any=[];

  constructor(private serlogin:LoginService) { }

  ngOnInit(): void {
  }

  // formulario login
  OnLogin(form){
    console.log(form)
    this.compararlogin=form
  }

  //login desde la api
   ladmin(user:string){
    this.serlogin.listlogin(user).subscribe(respw=>{
      console.log(respw)
      this.compararapi=respw;

     })
  }




}
