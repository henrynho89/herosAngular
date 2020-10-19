import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros-details',
  templateUrl: './heros-details.component.html',
  styleUrls: ['./heros-details.component.css']
})
export class HerosDetailsComponent implements OnInit {

  @Input('superHero') superHero: SuperHero;
  colspan = 2;
  colorTitle = "blue";
  constructor() { }

  ngOnInit() {
  }
  addFavorite($event){
    console.log($event);
  }
}

export interface SuperHero{
  name: string;
  description: string;
  imgSrc: string;
}
