import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/shared/services/blog.service';
import { CommentaireService } from 'src/app/shared/services/commentaire.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  constructor(private article: BlogService, private comment: CommentaireService,  private routes: ActivatedRoute, private rt : Router, private auth : LoginService) { }
public np;
public idArt;
public art;
public chap={
  titre:"",
  contenu:""
};
  ngOnInit() {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let i = params.get('np');
      console.log(i);
      let id = params.get('id');
      this.idArt = id;
      console.log(params);
      this.np=i;
      this.article.consCours(this.idArt).subscribe(file => {
        this.art = file;
        console.log("hedha l'id"+this.idArt);
        console.log(file);
        this.np=parseInt(this.np);
        
        this.chap=this.art.chapitres[this.np];
      }, err => console.log(err));

    });


    
  }

}
