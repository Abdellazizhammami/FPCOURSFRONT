import { Component, OnInit } from '@angular/core';
import { GesUserService } from 'src/app/shared/services/ges-user.service';
import { LoginService } from 'src/app/shared/services/login.service';

@Component({
  selector: 'app-gestionutilisateur',
  templateUrl: './gestionutilisateur.component.html',
  styleUrls: ['./gestionutilisateur.component.css']
})
export class GestionutilisateurComponent implements OnInit {

  constructor(private userServ : GesUserService, private auth : LoginService) { }

 public users ;
 public idAdmin;

  ngOnInit() {

    
this.getuserss();


  }

  getuserss(){

    this.idAdmin = this.auth.getUser().user._id;

    this.userServ.getUsers(this.idAdmin).subscribe(file => {
      this.users = file;
    })

  }

  addAdmin(userid){
    console.log(this.idAdmin);

    this.userServ.addAdmin(this.idAdmin,userid).subscribe(file =>{
      console.log(file);
      this.getuserss();
    })
  

  }

  deleteUser(userid){
    this.userServ.deleteUser(this.idAdmin,userid).subscribe(file =>{
      console.log(file);
      this.getuserss();
    })
  
  }

}
