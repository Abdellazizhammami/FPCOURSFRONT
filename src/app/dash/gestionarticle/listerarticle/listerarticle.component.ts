import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { GesArtService } from 'src/app/shared/services/ges-art.service';


@Component({
  selector: 'app-listerarticle',
  templateUrl: './listerarticle.component.html',
  styleUrls: ['./listerarticle.component.css']
})
export class ListerarticleComponent implements OnInit {
article;
user;
  constructor(private rote: Router, private art:HomeService, private auth: LoginService, private  gesC:GesArtService) { }
  ngOnInit() {

    this.user= this.auth.userrr.user;
        this.art.home(this.user._id).subscribe(file =>{
          
          this.article=file.json();
        
          

        })
      }
deleteC(idC){
  this.gesC.EffacArts(idC,this.user._id).subscribe(file =>{
    console.log('cours suprimé',file);
    this.art.home(this.user._id).subscribe(file2 =>{
          
      this.article=file2.json();
    
      

    })
    
  })
}
onSelect(idcours) {

  this.rote.navigate(['/cours', idcours, 'chap', 0])

}


    }
