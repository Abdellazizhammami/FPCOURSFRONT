import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';
import { LoginService } from 'src/app/shared/services/login.service';
import { GesArtService } from 'src/app/shared/services/ges-art.service';


@Component({
  selector: 'app-validate-cours',
  templateUrl: './validate-cours.component.html',
  styleUrls: ['./validate-cours.component.css']
})
export class ValidateCoursComponent implements OnInit {
public user;
public article;
public drufts = [];
public pendings = [];
public validated = [];
public rejecteds = [];
public other = [];



  constructor(private rote: Router, private art:HomeService, private auth: LoginService, private  gesC:GesArtService) { }

  ngOnInit() {
    this.user= this.auth.userrr.user;
    this.art.home('all').subscribe(file =>{
      this.article=file.json();
      this.article=this.initValid(this.article);
      this.triTab();
    })
    
  }
  initValid(tab){
    for(var i =0;i<tab.length;i++){
      console.log(tab[i].validateBy);
      if(!tab[i].validateBy){
        tab[i].validateBy=[{name:"ce cours n'est pas encore",lastname:" validée par personne"}]
      }
    }
    return tab;
  }
  onSelect(idcours) {

    this.rote.navigate(['/dash/vCours', idcours, 'chap', 0]);
  
  }
  triTab() {

    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let n = 0;
    this.article.forEach((tab)=> {
      switch (tab.status) {
        case "druft":        
          this.drufts[j] = tab;
          j++;
          break;
        case "validated": 
          this.validated[k] = tab;
          k++;
          break;
        case "rejected": 
          this.rejecteds[l] = tab;
          l++;
          break;
        case 'pending': 
          this.pendings[m] = tab;
          m++;
          break;
        
        default: 
          this.other[n] = tab;
          n++;
          break;
        
      }
    });
  }

}
