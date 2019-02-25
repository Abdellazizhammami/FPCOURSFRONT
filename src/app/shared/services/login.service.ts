import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import * as jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public userrr;

  constructor(private http: Http) {
    this.userrr = this.getUser(this.getToken());
  }


  public ApiLogin(user) {
    return this.http.post('http://localhost:3001/auth/login', user);
  }
  public loggedIn() {
    return !!localStorage.getItem('token');
  }
  public getStatus() {

    return this.userrr.user.status;


  }
  public isStudent() {

    if (this.userrr.user.status == 'Student') { return true }
    else { return false };


  }
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('admin');
  }
  public getToken() {
    return localStorage.getItem('token');
  }

  public getUser(token) {
    localStorage.setItem('token', token);
    this.userrr = jwt_decode(localStorage.getItem('token'));
    console.log(this.userrr);
    return this.userrr;
  }

}
