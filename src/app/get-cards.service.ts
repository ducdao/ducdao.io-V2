import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetCardsService {
  url = "https://ducdao.io/";

  constructor(private http: Http) { }

  // Get all cards from Firebase
  getAllCards() {
    return this.http.get(this.url + '/cards/')
      .map(res => res.json());
  }
}
