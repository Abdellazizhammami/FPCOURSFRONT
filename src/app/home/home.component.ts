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
public articles;
  ngOnInit() {

    this.homeServ.home('all').subscribe(file=>{
      this.articles=file.json();
      console.log(file.json());
      if(!this.log.loggedIn()) {
        this.articles=[];
        for(let i = 0 ; i<4 ; i++){
          this.articles[i] = file.json()[i];
        }
      }
  })

  }
  onSelect(art){

    this.routes.navigate(['/article',art._id]) 

  }

}
