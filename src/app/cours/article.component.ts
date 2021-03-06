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
  public comments=[{corps:'',user:{_id:''},auto:false}];
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
      this.user = this.auth.userrr.user;
      
      
    });
    console.log('idart est:'+this.idArt);


    this.article.consCours(this.idArt).subscribe(file => {
      this.art = file;
     
      //console.log(file);
      
      this.status = true;
    }, err => console.log(err));


  
      
  this.listercomments();

  

}
onSelect(aut){

  this.rt.navigate(['/artbyaut',aut]); 

}
pageChange(np){

  this.rt.navigate(['/cours',this.idArt,'chap',np]); 

}

submit(){

  this.userName = this.user.name + ' '+this.user.lastname ;
  this.corpss.corps= this.corp;
  
  this.comment.addComment(this.user._id,this.idArt,this.corpss).subscribe(file => {
    console.log(file);
    console.log(this.corpss);
  this.textarea='';
    this.listercomments();
 
  });
}

listercomments(){

  this.comment.listerComment(this.idArt ).subscribe(file => {
  this.comments = file;
  for(var i=0;i<this.comments.length;i++){

if(this.user._id.toString()==this.comments[i].user._id.toString()){

this.comments[i].auto=true;
} else {this.comments[i].auto=false;}

  }
  

});

}

delete(idcom){
  this.comment.deleteComment(idcom,this.user._id).subscribe(file => {
  //this.comments = file;
  console.log(file);
  this.listercomments();
  });
}

update(idcomment){
  this.corpss.corps=this.updatecorp;
  this.comment.updateComment(this.user._id,idcomment,this.corpss).subscribe(file => {
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





