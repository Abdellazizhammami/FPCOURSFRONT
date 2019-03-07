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



  constructor(private homeServ: HomeService, private routes: Router, private log: LoginService) { }
  public course = [];
  public progLang = [];
  public webTech = [];
  public netSys = [];
  public projMan = [];
  public other = [];
  ngOnInit() {

    this.homeServ.home('all').subscribe(file => {
      this.course = file.json();

      this.triTab(this.course);
    
      
      console.log('etat est', this.log.loggedIn())
      if (!this.log.loggedIn()) {
        this.progLang = this.tabdeux(this.progLang);
        
        this.webTech = this.tabdeux(this.webTech);
        
        this.netSys = this.tabdeux(this.netSys);
        this.projMan = this.tabdeux(this.projMan);
      };
    })

  }
  tabdeux(tab) {
    var ttab = [];
    if (tab.length > 2) {
      for (let i = 0; i < 2; i++) {
        ttab[i] = tab[i];
      }
      return ttab;
    } else return tab;
  }
  triTab(tab) {

    let j = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let n = 0;
    for (let i = 0; i < tab.length; i++) {
      switch (tab[i].categorie) {
        case "Programming languages": {
          this.progLang[j] = tab[i];
          j++;
          break;
        }
        case "Web Technologies": {
          this.webTech[k] = tab[i];
          k++;
          break;
        }
        case "Network & System": {
          this.netSys[l] = tab[i];
          l++;
          break;
        }
        case 'Project Management': {
          this.projMan[m] = tab[i];
          m++;
          break;
        }
        default: {
          this.other[n] = tab[i];
          n++;
          break;
        }
      }
    }
  }
  onSelect(idcours) {

    this.routes.navigate(['/cours', idcours, 'chap', 0])

  }

}
