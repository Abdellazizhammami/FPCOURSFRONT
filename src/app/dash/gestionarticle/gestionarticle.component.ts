import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-gestionarticle',
  templateUrl: './gestionarticle.component.html',
  styleUrls: ['./gestionarticle.component.css']
})
export class GestionarticleComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
