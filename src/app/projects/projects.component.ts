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

   tiles = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

   constructor(private getCardsService: GetCardsService) { }

   ngOnInit() {
      // Get card information from Firebase
      this.getCardsService.getCards('projects').subscribe(cards => {
         console.log(cards);
         this.cardData = cards;
         
         // Create array of cards
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
