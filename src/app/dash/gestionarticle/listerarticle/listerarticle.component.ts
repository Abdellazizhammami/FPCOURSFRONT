import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { HomeService } from 'src/app/shared/services/home.service';


@Component({
  selector: 'app-listerarticle',
  templateUrl: './listerarticle.component.html',
  styleUrls: ['./listerarticle.component.css']
})
export class ListerarticleComponent implements OnInit {
article;
  constructor(private rote: Router, private art:HomeService) { }
  ngOnInit() {
        this.art.home('all').subscribe(file =>{
          
          this.article=file.json();
          console.log(file.json());

        })
      }
    }
