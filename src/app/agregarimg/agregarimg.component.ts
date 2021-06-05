import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Imagen } from '../models/interface-imagen';
import { ImagenService } from '../service/imagen.service';

@Component({
  selector: 'app-agregarimg',
  templateUrl: './agregarimg.component.html',
  styleUrls: ['./agregarimg.component.css']
})
export class AgregarimgComponent implements OnInit {

  imag2: Imagen={
    id:       0,
    cedula:   '',
    nombre:   '',
    apellido: '',
    edad:     '',
    sexo:     '',
    avatar:  '',
  }

  constructor(private servImg:ImagenService, private router:Router) { }

  ngOnInit(): void {
  }

  guardarImg(){
    delete this.imag2.id;
    this.servImg.saveImg(this.imag2).subscribe(resp=>{
      console.log(resp)

      this.router.navigate(['/home/galeria'])
      

    })

  }
}
