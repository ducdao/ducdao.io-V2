import { CardsService } from './../cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './lovessarahhopkins.component.html',
  styleUrls: ['./lovessarahhopkins.component.css']
})
export class LovesSarahHopkinsComponent implements OnInit {
  cards: any;

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
    // Get card information from Firebase
    this.cardsService.getCards('home').valueChanges().subscribe(cards => {
      this.cards = cards[0];
    })
  }
}
