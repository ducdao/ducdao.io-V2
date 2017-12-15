import { GetCardsService } from './../get-cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'app-personal',
   templateUrl: './personal.component.html',
   styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
   FBCardData: any;
   cards: any[] = []

   constructor(private getCardsService: GetCardsService) { }

   ngOnInit() {
      // Get card information from Firebase
      this.getCardsService.getCards('personal').valueChanges().subscribe(cards => {
         console.log(cards);
         this.FBCardData = cards;
        
         // Create array of cards from Firebase data
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
