import { Component, OnInit } from '@angular/core';
import { VideoService } from '../service/video.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  public Video2:any=[];
  constructor(private serVideo:VideoService) { }

  ngOnInit(): void {
    this.serVideo.listVideos().subscribe(resp1=>{
      console.log(resp1)
      this.Video2=resp1;
    })
  }

  data=Object.values(this.Video2)

  mostraVideos(){
    
  }





}
