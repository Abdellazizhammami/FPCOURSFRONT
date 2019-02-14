import { Component, OnInit } from '@angular/core';
import { HomeService } from '../shared/services/home.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-artbyaut',
  templateUrl: './artbyaut.component.html',
  styleUrls: ['./artbyaut.component.css']
})
export class ArtbyautComponent implements OnInit {

  constructor(private homeServ : HomeService, private routes : Router, private rt : ActivatedRoute) { }
public articles;
public auteur;
  ngOnInit() {

    this.rt.paramMap.subscribe((params: ParamMap) => {
      let id = params.get('aut');
      this.auteur = id;
    });

    this.homeServ.home(this.auteur).subscribe(file=>{
      this.articles=file.json();
      console.log(file.json());
     
      
  })

  }
  onSelect(art){

    this.routes.navigate(['/article',art._id]) 

  }
}
