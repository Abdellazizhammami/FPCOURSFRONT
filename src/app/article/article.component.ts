import { Component, OnInit } from '@angular/core';
import { BlogService } from '../shared/services/blog.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CommentaireService } from '../shared/services/commentaire.service';
import { LoginService } from '../shared/services/login.service';



@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  public idArt = "";
  public art;
  public status = false;
  public corp:string;
  public corpss = { corps : "", userName:""};
  public textarea='add comment';
  public comments=[{corps:''}];
  public user;
  public userName;
  public idcomment;
  public updatecorp;
  public updateState = false;
  public ucomid;
  constructor(private article: BlogService, private comment: CommentaireService,  private routes: ActivatedRoute, private rt : Router, private auth : LoginService) { }

  ngOnInit() {
    //let id = this.routes.snapshot.paramMap.get('id');
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('id');
      this.idArt = id;
      this.user = this.auth.getUser();
      console.log(this.user);
      console.log(this.idArt);
    });


    this.article.listerArts(this.idArt).subscribe(file => {
      this.art = file;
      console.log(this.idArt);
      console.log(file);
      
      this.status = true;
    }, err => console.log(err));


    this.comment.listerComment(this.idArt ).subscribe(file => {
      this.comments = file;
      console.log(file);
    });
    

  

}
onSelect(aut){

  this.rt.navigate(['/artbyaut',aut]); 

}

submit(){

  this.userName = this.user.user.name + ' '+this.user.user.lastname ;
  this.corpss.corps= this.corp;
  this.corpss.userName = this.userName;
  this.comment.addComment(this.user.user._id,this.idArt,this.corpss).subscribe(file => {
    console.log(file);
    console.log(this.corpss);
  this.textarea='';
    this.listercomments();
 
  });
}

listercomments(){

  this.comment.listerComment(this.idArt ).subscribe(file => {
  this.comments = file;
  console.log(file);

});

}

delete(idcom){
  this.comment.deleteComment(idcom,this.user.user._id).subscribe(file => {
  //this.comments = file;
  console.log(file);
  this.listercomments();
  });
}

update(idcomment){
  this.corpss.corps=this.updatecorp;
  this.comment.updateComment(this.user.user._id,idcomment,this.corpss).subscribe(file => {
    //this.comments =file;
    console.log(file);
    this.updateState=false;
    this.listercomments();
  })
}
updates(idcomment,k){
  this.updatecorp= this.comments[k].corps;
  this.ucomid=idcomment;
  this.updateState=true;
}

}





