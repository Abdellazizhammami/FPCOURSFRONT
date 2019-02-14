import { Injectable } from '@angular/core';
import { Http} from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http : Http) { }

  public home(auth:string){
    return this.http.get('http://localhost:3001/home/home/'+auth);
    
  }
}
