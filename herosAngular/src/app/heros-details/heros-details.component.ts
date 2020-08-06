import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-heros-details',
  templateUrl: './heros-details.component.html',
  styleUrls: ['./heros-details.component.css']
})
export class HerosDetailsComponent implements OnInit {
  name : string = "Captain America";
  description : string = "Bonjour je suis le super heros catain america de Marvel";
  imgSrc : string ="https://static1.purebreak.com/articles/8/18/92/08/@/703780-le-faucon-et-le-soldat-de-l-hiver-deco-diapo-1.jpg";
  colspan = 2;
  colorTitle = "blue";
  constructor() { }

  ngOnInit() {
  }
  addFavorite($event){
    console.log($event);
  }
}
