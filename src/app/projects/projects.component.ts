import { Cards } from './../cards';
import { GetCardsService } from './../get-cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-projects',
   templateUrl: './projects.component.html',
   styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
   // Unsorted card data from Firebase
   cardData:any;

   // Sorted cards
   cards:any[] = [];

   constructor(private getCardsService: GetCardsService) { }

   ngOnInit() {
      // Get card information from Firebase
      this.getCardsService.getCards('projects').subscribe(cards => {
         console.log(cards);
         this.cardData = cards;
         
         for (let key in this.cardData) {
            this.cards.push(this.cardData[key]);
         }    
         
         this.sortCards(); 

         console.log("SORTED BY ORDER: ");
         console.log(this.cards);
      })
   }

   sortCards() {
      this.cards.sort(function(a, b) {
         if (a.order > b.order)
            return -1;
         
         if (a.order < b.order)
            return 1;
      });
   }
}
