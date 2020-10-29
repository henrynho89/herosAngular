import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/SuperHeroInterface';

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
  constructor(private _superHeroService: SuperheroService) { }

  ngOnInit() {
  }
  addFavorite(){
    //this.addToFavorite.emit(this.superHero.id);
    this.addToFavorite.emit(this.superHero.id);
  }
}

