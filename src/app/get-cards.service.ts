import { Cards } from './cards';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetCardsService {
  url = "https://ducdao.io/";
  cards: FirebaseListObservable<any[]>;

  constructor(private http: Http, private afd: AngularFireDatabase) { }

  // Get all cards from Firebase
  getAllCards() {
    this.cards = this.afd.list('/home') as FirebaseListObservable<Cards[]>

    return this.cards;
  }
}
