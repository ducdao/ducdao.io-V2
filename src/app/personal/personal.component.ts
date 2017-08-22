import { GetCardsService } from './../get-cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.css']
})
export class PersonalComponent implements OnInit {
  cardData: any;
  cards: any[] = []

  constructor(private getCardsService: GetCardsService) { }

  ngOnInit() {
      // Get card information from Firebase
      this.getCardsService.getCards('personal').subscribe(cards => {
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
