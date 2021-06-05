import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { ImagenComponent } from './imagen/imagen.component';
import { VideoComponent } from './video/video.component';
import { AgregarimgComponent } from './agregarimg/agregarimg.component';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms'
import { ImagenService } from './service/imagen.service';
import { VideoService } from './service/video.service';
import { LoginComponent } from './login/login.component';

//login
import{ ReactiveFormsModule} from '@angular/forms'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavegacionComponent,
    ImagenComponent,
    VideoComponent,
    AgregarimgComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ImagenService,
    VideoService
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
