import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  errorText: string ="";
  mot: string ="";
  constructor() { }

  ngOnInit() {
  }
  verification(){
    if(this.mot.length<=3)
      this.errorText="Le nombre de caracteres doit etre superieur a 3";
    else
      this.errorText=this.mot;
  }
}
