import { Cards } from './cards';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CardsService {
   constructor(private http: Http, private afdb: AngularFireDatabase) { }

   // Get all cards for a certain page
   getCards(page: any) {
      return this.afdb.list(page)
   }

   // Sort cards by order attribute in Firebase
   sortCards(cards: any[]) {
      cards.sort(function (cardA, cardB) {
         if (cardA.order > cardB.order)
            return -1;

         if (cardA.order < cardB.order)
            return 1;
      });
   }

   // Organize cards into two groups, leftCards and rightCards
   splitCards(allCards: any[], leftCards: any[], rightCards: any[]) {
      for (let card of allCards) {
         // Even, is right card
         if (card.order % 2 == 0) {
            rightCards.push(card)
         }
         // Odd, is left card
         else {
            leftCards.push(card)
         }
      }
   }
}
