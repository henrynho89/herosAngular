import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  name: string ="Captain America";
  description: string ="Le super hero Captain America";
  imgUrl: string="https://static1.purebreak.com/articles/8/18/92/08/@/703780-le-faucon-et-le-soldat-de-l-hiver-deco-diapo-1.jpg";
  constructor() { }

  ngOnInit() {
  }
  test(): string{
    return "ceci est un test";
  }
  addFavorite($event){
    console.log($event);
  }
}
