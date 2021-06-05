import { Component, OnInit } from '@angular/core';
import { ImagenService } from '../service/imagen.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent implements OnInit {

  public imagenes2:any=[];

  constructor(private servImg:ImagenService) { }

  ngOnInit(): void {
    this.mostrarImg()
  }

  mostrarImg(){
    this.servImg.listImgs().subscribe(resp=>{
      console.log(resp)
      this.imagenes2=resp;
    })
 }

 eliminarImg(id:string){
   this.servImg.deleteImg(id).subscribe(resp=>{
     this.mostrarImg()
   })
 }

}
