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
public chap;
  ngOnInit() {
    this.routes.paramMap.subscribe((params: ParamMap) => {
      let i = params.get('np');
      let id = params.get('id');
      this.idArt = id;
      this.np=i;
    });
    this.article.listerArts(this.idArt).subscribe(file => {
      this.art = file;
      console.log(this.idArt);
      console.log(file);
      
     
    }, err => console.log(err));

    this.chap=this.art.chapitres[this.np];
  }

}
