import { Cards } from './../cards';
import { GetCardsService } from './../get-cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-projects',
   templateUrl: './projects.component.html',
   styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   FBCardData: any;
   allCards: any[] = [];

   // Cards on the left/right side, determined by order attribute
   leftCards: any[] = [];
   rightCards: any[] = [];

   constructor(private getCardsService: GetCardsService) { }

   ngOnInit() {
      // Get card information from Firebase
      this.getCardsService.getCards('projects').valueChanges().subscribe(cards => {
         console.log(cards);
         this.FBCardData = cards;
         
         // Create array of cards
         for (let card in this.FBCardData) {
            this.allCards.push(this.FBCardData[card]);
         }    
         
         this.sortCards();
         this.splitCards(); 

         console.log("SORTED BY ORDER: ");
         console.log(this.allCards);
      })
   }

   // Sort cards by order attribute in Firebase
   sortCards() {
      this.allCards.sort(function(cardA, cardB) {
         if (cardA.order > cardB.order)
            return -1;
         
         if (cardA.order < cardB.order)
            return 1;
      });
   }

   // Organize cards into two groups, leftCards and rightCards
   splitCards() {
      for (let card of this.allCards) {
         // Even, is right card
         if (card.order % 2 == 0) {
            this.rightCards.push(card)
         }
         // Odd, is left card
         else {
            this.leftCards.push(card)
         }
      }
   }
}
