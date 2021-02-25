import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes : []

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.getHeroes().subscribe((data: []) =>{
      this.heroes = data;
      console.log(this.heroes);
    });
  }

}
