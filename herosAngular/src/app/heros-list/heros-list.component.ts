import { Component, OnInit } from '@angular/core';
import { SuperHero } from '../heros-details/heros-details.component';

@Component({
  selector: 'app-heros-list',
  templateUrl: './heros-list.component.html',
  styleUrls: ['./heros-list.component.css']
})
export class HerosListComponent implements OnInit {

  superHeroes: SuperHero[] = [
    {
      name: "Captain America",
      description: "Le super heros Captain America",
      imgSrc: "https://static1.purebreak.com/articles/8/18/92/08/@/703780-le-faucon-et-le-soldat-de-l-hiver-deco-diapo-1.jpg"
    },
    {
      name: "Captain Marvel",
      description: "Le super heros Captain Marvel",
      imgSrc: "https://static1.purebreak.com/articles/8/18/92/08/@/703780-le-faucon-et-le-soldat-de-l-hiver-deco-diapo-1.jpg"
    },
    {
      name: "Thor",
      description: "Le super heros Thor",
      imgSrc: "https://static1.purebreak.com/articles/8/18/92/08/@/703780-le-faucon-et-le-soldat-de-l-hiver-deco-diapo-1.jpg"
    },
    {
      name: "SpiderMan",
      description: "Le super heros SpiderMan",
      imgSrc: "https://static1.purebreak.com/articles/8/18/92/08/@/703780-le-faucon-et-le-soldat-de-l-hiver-deco-diapo-1.jpg"
    },
    {
      name: "IronMan",
      description: "Le super heros IronMan",
      imgSrc: "https://static1.purebreak.com/articles/8/18/92/08/@/703780-le-faucon-et-le-soldat-de-l-hiver-deco-diapo-1.jpg"
    },
    {
      name: "Black Panther",
      description: "Le super heros Captain America",
      imgSrc: "https://static1.purebreak.com/articles/8/18/92/08/@/703780-le-faucon-et-le-soldat-de-l-hiver-deco-diapo-1.jpg"
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
