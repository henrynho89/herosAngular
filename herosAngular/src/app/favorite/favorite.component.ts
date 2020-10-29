import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/SuperHeroInterface';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.css']
})
export class FavoriteComponent implements OnInit {
  superHeroes: SuperHero[];
  constructor(private _superHeroService : SuperheroService) { }

  ngOnInit() {
   this.superHeroes= this._superHeroService.superHeroesFav();
  }
  
  superHeroesFav(): SuperHero[]{
    return this.superHeroes;
  }

}
