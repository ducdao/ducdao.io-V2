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
   cards: any[] = [];

   constructor(private getCardsService: GetCardsService) { }

   ngOnInit() {
      // Get card information from Firebase
      this.getCardsService.getCards('projects').subscribe(cards => {
         console.log(cards);
         this.FBCardData = cards;
         
         // Create array of cards
         for (let card in this.FBCardData) {
            this.cards.push(this.FBCardData[card]);
         }    
         
         this.sortCards(); 

         console.log("SORTED BY ORDER: ");
         console.log(this.cards);
      })
   }

   // Sort cards by order attribute in Firebase
   sortCards() {
      this.cards.sort(function(a, b) {
         if (a.order > b.order)
            return -1;
         
         if (a.order < b.order)
            return 1;
      });
   }
}
