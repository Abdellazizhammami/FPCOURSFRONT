import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {
public loggedIn;
public status='';
  constructor(private auth : LoginService) { }

  ngOnInit() {
    
    
    this.status=this.auth.userrr.user.status;
    

    this.loggedIn=this.auth.loggedIn();

    console.log(this.status,this.loggedIn);


  }

}
