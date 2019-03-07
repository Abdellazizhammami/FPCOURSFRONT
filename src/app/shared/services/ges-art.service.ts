import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class GesArtService {

  constructor(private http: HttpClient) { }
  public AjouterArts(Art,titre,auteur,categorie){
    let data= new FormData();
    /*
    for(var i =0; i<chapitres.length;i++){

      
      data.append('chap'+i+'titre',chapitres[i].titre);
      data.append('chap'+i+'contenu',chapitres[i].contenu);
      

    };
*/


    data.append('image',Art);
    data.append('titre',titre);
    data.append('prof',auteur);
    
    data.append('categorie',categorie);
    return this.http.post('http://localhost:3001/api-img/imgUpload',data);
    
    
  }
  public ModifArts(idUser,idArt,body){
    return this.http.post('http://localhost:3001/cours/upCours/'+idUser+'/'+idArt , body);
    
  }

  public EffacArts(idArt,idUser){
    return this.http.get('http://localhost:3001/article/deleteArt'+idUser +'/'+ idArt);
    
  }

}
 
