import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private login : LoginService, private routes : Router) { }
public status = this.login.loggedIn();


ngOnInit() {
  }
logout(){
  this.login.logout();
  this.status = this.login.loggedIn();
  // si le routes est /hom la page ne se refréche pas ask chahir for it
  this.routes.navigate(['/home']);

}
}
