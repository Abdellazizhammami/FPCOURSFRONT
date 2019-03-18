import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';

import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';
import { GesArtService } from 'src/app/shared/services/ges-art.service';


@Component({
  selector: 'app-lireart',
  templateUrl: './lireart.component.html',
  styleUrls: ['./lireart.component.css']
})
export class LireartComponent implements OnInit {

  public idArt = "";
  public art;
  public status = false;
  public user;
  public userName;
  public disable =false;


  constructor(private article: BlogService, private gesArt:GesArtService,  private routes: ActivatedRoute, private rt : Router, private auth : LoginService) { }

  ngOnInit() {
    //let id = this.routes.snapshot.paramMap.get('id');
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      
      this.idArt = id;
      this.user = this.auth.userrr.user;


      
      
    });

    this.article.consCours(this.idArt).subscribe(file => {

      this.art = file;
     
     
     for(var i=0;i<this.art.validateBy.length;i++){
      
      if(this.art.validateBy[i]==this.user._id){
        this.disable=true;
      }
     }
      
      this.status = true;
    }, err => console.log(err));


  
      
  
  

}
onSelect(aut){

  this.rt.navigate(['/artbyaut',aut]); 

}
pageChange(np){

  this.rt.navigate(['/cours',this.idArt,'chap',np]); 

}









validate(){
  this.gesArt.ModifArts(this.user._id,this.idArt,{validate:this.user._id}).subscribe(res=>{
   
    this.rt.navigate(['/dash/validateCours']);
  });

}

}

