import { Cards } from './cards';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetCardsService {
  cards: FirebaseListObservable<any[]>;

  constructor(private http: Http, private afd: AngularFireDatabase) { }

  // Get all cards for a certain page
  getCards(page: any) {
    this.cards = this.afd.list(page) as FirebaseListObservable<Cards[]>

    return this.cards;
  }
}
