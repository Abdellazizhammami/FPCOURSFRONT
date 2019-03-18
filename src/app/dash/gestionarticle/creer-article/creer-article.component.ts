import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GesArtService } from 'src/app/shared/services/ges-art.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { FormControl, FormGroup, FormArray, FormBuilder } from '@angular/forms';

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
  public form:FormGroup;
 
  public categorie="";
  public selectedFile :File=null;
  titre:string;
  contenu:string;
  



  constructor(private rote: Router, private addArt: GesArtService, private keteb: LoginService,private fb: FormBuilder) {
    this.form = this.fb.group({
      
      chapitres: this.fb.array([])
    });
   }

  ngOnInit() {
    // this.art.titre=this.titre;
    // this.art.contenu=this.contenu,
    
    this.utilisateur = this.keteb.userrr.user;
    console.log(this.utilisateur);
    this.art.auteur = this.utilisateur._id;
    //this.art.chapitres= this.chapitres;
   
    
  }


  ajArt() {
   
    this.addArt.AjouterArts(this.selectedFile,this.art.titre,this.art.auteur,this.art.categorie).subscribe(file => {
      this.newArt = file;
      this.addArt.ModifArts(this.art.auteur,this.newArt.data._id,this.form.value).subscribe(file2 => {
        this.newArt = file2;
      } );
      this.rote.navigate(['/home']);
    })
  }
  upImg(event){
    this.selectedFile= event.target.files[0];
  }
  addChap() {
    const chap = this.form.get('chapitres') as FormArray;
    chap.push(this.fb.group({
      titre: '',
      contenu: ''
    }));

    

  }
  removeChap(i){
    const chap = this.form.get('chapitres') as FormArray;
    chap.removeAt(i);

  }



}



