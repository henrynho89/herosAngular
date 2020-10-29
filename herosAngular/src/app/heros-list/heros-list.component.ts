import { Component, Input, OnInit } from '@angular/core';
import { SuperheroService } from '../shared/superhero.service';
import { SuperHero } from '../shared/SuperHeroInterface';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  @Input('superHeroes') superHeroes: SuperHero[];
  constructor(private _superHeroService: SuperheroService) { }

  ngOnInit() {
  }
  addToFavoriteMain(id){
    //this.superHeroes[$id].favorite = ! this.superHeroes[$id].favorite;
    console.log("Message recu: "+id);
    this._superHeroService.setFavorite(id);
  }

}
