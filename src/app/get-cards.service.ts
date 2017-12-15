import { Cards } from './cards';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetCardsService {
  constructor(private http: Http, private afdb: AngularFireDatabase) { }

  // Get all cards for a certain page
  getCards(page: any) {
    return this.afdb.list(page)
  }
}
