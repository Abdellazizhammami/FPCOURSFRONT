import { Component, OnInit } from '@angular/core';
import { LoginService } from '../shared/services/login.service';
//import{NgForm}from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  mail :string;
  pwd:string;
  public new;
  public userss : any;
  public user ={};

  constructor(private logUser:LoginService, private routes : Router) { }

  ngOnInit() {
  }

  loginUser(){
    
    console.log(this.user);
    this.logUser.ApiLogin(this.user).subscribe(res=>{
           localStorage.setItem('token',res.json().token);
           localStorage.setItem('admin',res.json().admin);
          console.log(res.json());



          console.log(localStorage.getItem('admin'));
          
         // console.log(this.userss);
          
          this.routes.navigate(['/home']);

      })
}
}



