import { Cards } from './../cards';
import { CardsService } from './../cards.service';
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

   constructor(private CardsService: CardsService) { }

   ngOnInit() {
      // Get card information from Firebase
      this.CardsService.getCards('projects').valueChanges().subscribe(cards => {
         console.log(cards);
         this.FBCardData = cards;

         // Create array of cards
         for (let card in this.FBCardData) {
            this.allCards.push(this.FBCardData[card]);
         }

         this.CardsService.sortCards(this.allCards);
         this.CardsService.splitCards(this.allCards, this.leftCards, this.rightCards);

         console.log("SORTED BY ORDER: ");
         console.log(this.allCards);
      })
   }
}
