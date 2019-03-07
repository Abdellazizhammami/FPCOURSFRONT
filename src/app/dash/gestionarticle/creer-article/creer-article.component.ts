import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GesArtService } from 'src/app/shared/services/ges-art.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-creer-article',
  templateUrl: './creer-article.component.html',
  styleUrls: ['./creer-article.component.css']
})
export class CreerArticleComponent implements OnInit {
  art: any = {};
  public newArt;
  public utilisateur;
  public fileimg= new FormData;
  public chapitres = [
    {
      titre:"creeart0001",
      contenu:"ycgvhbkjnlk"
    },
    {
      titre:"creeart1",
      contenu:"ycgvhbkjn"
    },
    {
      titre:"creeart2",
      contenu:"ycgvhbkjjlkjlhoi"
    }
  ];
  public categorie="Network & System";
  public selectedFile :File=null;
  titre:string;
  contenu:string;



  constructor(private rote: Router, private addArt: GesArtService, private keteb: LoginService) { }

  ngOnInit() {
    // this.art.titre=this.titre;
    // this.art.contenu=this.contenu,
    this.utilisateur = this.keteb.userrr.user;
    this.art.auteur = this.utilisateur._id;
    this.art.chapitres= this.chapitres;
    this.art.categorie= this.categorie;
  }


  ajArt() {
   
    this.addArt.AjouterArts(this.selectedFile,'nameee',this.art.auteur,this.chapitres,this.categorie).subscribe(file => {
      this.newArt = file;
      console.log(file);
      this.rote.navigate(['/home']);
    })
  }
  upImg(event){
    console.log(event);
    this.selectedFile= event.target.files[0];
    
    
    
  }
}



