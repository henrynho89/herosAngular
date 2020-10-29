import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SuperHero } from './SuperHeroInterface';

@Injectable({
  providedIn: 'root'
})
export class SuperheroService {
  accessToken = '3752119424820763';
  url = 'https://cors-anywhere.herokuapp.com/https://superheroapi.com/api/';
  superHeroes: SuperHero[];
  constructor(private httpClient: HttpClient) { }

  loadSuperHeroes(name: string): Observable<SuperHero[]>{
    return this.httpClient.get<SuperHero[]>(this.url + this.accessToken + '/search/'+ name);
  }


  superHeroesMain(): SuperHero[]{
    return this.superHeroes;
  }
  superHeroesFav(): SuperHero[]{
    return this.superHeroes.filter(hero => hero.favorite === true);
  }
  setFavorite(id){
    this.superHeroes[id].favorite= !this.superHeroes[id].favorite;
  }
}
