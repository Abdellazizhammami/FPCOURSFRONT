import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: Http) { }
  public ApiLogin(user){
    return this.http.post('http://localhost:3001/auth/login', user);
  }
  public loggedIn(){
    return !!localStorage.getItem('token');
  }
  public isAdmin(){
    if(localStorage.getItem('admin') == "true"){
      return true ;

    }
    else return false ;
  }
  public logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
  }
  public getToken(){
    return localStorage.getItem('token');
  }

  public getUser(){
   return jwt_decode(localStorage.getItem('token'));
  }
  
}
