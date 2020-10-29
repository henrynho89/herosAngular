import { Component, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/SuperHeroInterface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  errorText: string ="";
  mot: string ="";
  superHeroes: SuperHero[]= [];
  constructor(private _superHeroService: SuperheroService) { }

  ngOnInit() {
    this.superHeroes= this._superHeroService.superHeroesMain();
  }
  verification(){
    if(this.mot.length<=3){
      this.errorText="Le nombre de caracteres doit etre superieur a 3";
    }
    else{
      this.errorText=this.mot;
      //Observer le resultat dans la console
      // this._superHeroService.loadSuperHeroes(this.mot).subscribe(resultat =>{
      //   console.log(resultat);
      // })
      this._superHeroService.loadSuperHeroes(this.mot).subscribe(resultat =>{
        this.superHeroes = resultat['results'].map( result => {
          result.favorite = false;
          return result;
        });
      });
    }
  }
  superHeroesMain() : SuperHero[] {
    return this.superHeroes;
  }
}
