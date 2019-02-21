import { Injectable } from '@angular/core';
//import { Http } from '@angular/http';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private http: HttpClient) {  }
  public consCours(idArt:string){
    return this.http.get<any>('http://localhost:3001/cours/consulterCours/'+idArt);
    
  }

 
}
 
 