import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';


@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

 

  constructor( private route: ActivatedRoute, private router: Router) {
  
   }
   np;

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      let i = params.get('np');
      this.np=i;
      console.log('chapter',i);
      
    });
 


  }

  
}