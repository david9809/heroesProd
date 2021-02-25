import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Data } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  id = null;
  heroe: any;

  constructor(private _data: DataService, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    this._data.getHeroe(this.id).subscribe(data => {
      this.heroe = data;
    });
  }

  guardar(form: NgForm){
    
  }

}
