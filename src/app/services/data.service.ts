import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  protected url = "https://heroes-1602d.firebaseio.com";

  constructor(private _http: HttpClient) { }

  getHeroes(){
    return this._http.get(`${this.url}/heroes.json`);
  }

  getHeroe(id){
    return this._http.get(`${this.url}/heroes/${id}.json`);
  }

}
