import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-heros-details',
  templateUrl: './heros-details.component.html',
  styleUrls: ['./heros-details.component.css']
})
export class HerosDetailsComponent implements OnInit {

  @Input('superHero') superHero: SuperHero;
  @Output() addToFavorite= new EventEmitter();
  colspan = 2;
  colorTitle = "blue";
  constructor() { }

  ngOnInit() {
  }
  addFavorite(){
    this.addToFavorite.emit(this.superHero.id);
  }
}

export interface SuperHero{
  id: number;
  name: string;
  description: string;
  imgSrc: string;
  favorite: boolean;
}
