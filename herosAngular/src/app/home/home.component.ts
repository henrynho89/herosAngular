import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../heros-details/heros-details.component';
import { SuperheroService } from '../shared/superhero.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  superHeroes: SuperHero[];
  constructor(private _superHeroService : SuperheroService) { }

  ngOnInit() {
    this.superHeroes=this._superHeroService.superHeroesMain();
  }

  superHeroesMain(): SuperHero[]{
    return this.superHeroes;
  }
}
