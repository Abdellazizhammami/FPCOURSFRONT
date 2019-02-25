import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { Router } from '@angular/router';
import { LoginService } from '../shared/services/login.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  

  constructor(private homeServ : HomeService, private routes : Router, private log : LoginService) { }
public course=[];
public progLang=[];
public webTech=[];
public netSys=[];
public projMan=[];
  ngOnInit() {

    this.homeServ.home('all').subscribe(file=>{
      this.course=file.json();
      console.log(file.json());
      if(!this.log.loggedIn()) {
        this.course=[];
        for(let i = 0 ; i<4 ; i++){
          this.course[i] = file.json()[i];
        }
      }
     
  })

  }
  triTab(tab){
    for(let i =0;i<tab.length;i++){
      switch (tab[i].categorie){
        case 'Programming languages' :{
          this.progLang[i]
        }
      }
    }
  }
  onSelect(idcours){

    this.routes.navigate(['/cours',idcours,'chap',0]) 

  }

}
