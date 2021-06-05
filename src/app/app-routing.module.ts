import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagenComponent } from './imagen/imagen.component';
import { LoginComponent } from './login/login.component';
import { VideoComponent } from './video/video.component';

const routes: Routes = [

  {
    path:'',
    redirectTo:'/login',
    pathMatch:'full'
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'home/galeria',
    component:ImagenComponent
  },
  {
    path:'home/galeria/videos',
    component:VideoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
