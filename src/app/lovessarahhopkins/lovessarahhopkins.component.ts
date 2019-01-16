import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './lovessarahhopkins.component.html',
  styleUrls: ['./lovessarahhopkins.component.css']
})
export class LovesSarahHopkinsComponent implements OnInit {
  FBCardData: any;
  allCards: any[] = []
  leftCards: any[] = []
  rightCards: any[] = []

  constructor(private CardsService: CardsService) { }

  ngOnInit() {
     // Get card information from Firebase
     this.CardsService.getCards('lovessarahhopkins').valueChanges().subscribe(cards => {
        console.log(cards);
        this.FBCardData = cards;
       
        // Create array of cards from Firebase data
        for (let card in this.FBCardData) {
          this.allCards.push(this.FBCardData[card]);
        }    
       
        this.CardsService.sortCards(this.allCards);
        this.CardsService.splitCards(this.allCards, this.leftCards, this.rightCards) 

        console.log("SORTED BY ORDER: ");
        console.log(this.allCards);
     })
  }
}
