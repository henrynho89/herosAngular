import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../heros-details/heros-details.component';
import { SuperheroService } from '../shared/superhero.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  errorText: string ="";
  mot: string ="";
  superHeroes: SuperHero[];
  constructor(private _superHeroService: SuperheroService) { }

  ngOnInit() {
    this.superHeroes= this._superHeroService.superHeroesMain();
  }
  verification(){
    if(this.mot.length<=3)
      this.errorText="Le nombre de caracteres doit etre superieur a 3";
    else
      this.errorText=this.mot;
  }
  superHeroesMain():SuperHero[]{
    return this.superHeroes;
  }
}
