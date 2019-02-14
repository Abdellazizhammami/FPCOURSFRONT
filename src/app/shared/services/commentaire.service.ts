import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommentaireService {

  constructor(private http: HttpClient) {}
    public addComment(iduser, idarticle, corp){
      return this.http.post<any>('http://localhost:3001/article/ajoutComment/'+ iduser +'/'+ idarticle,corp);
      
    }
    
    listerComment(idarticle) {
      return this.http.get<any>('http://localhost:3001/article/listerComment/'+idarticle); 

    }

    deleteComment(idcomment, iduser){
      return this.http.get<any>('http://localhost:3001/article/deletecomment/'+idcomment+'/'+iduser)
    }

    updateComment(iduser, idcomment, corp){
      return this.http.post<any>('http://localhost:3001/article/updatecomment/'+iduser+'/'+idcomment, corp)
    }
   }


  
   
