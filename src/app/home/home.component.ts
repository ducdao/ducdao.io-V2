import { GetCardsService } from './../get-cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cards:any;

  constructor(private getCardsService: GetCardsService) { }

  ngOnInit() {
    // Get card information from Firebase
    this.getCardsService.getCards('home').subscribe(cards => {
      this.cards = cards[0];
    })
  }
}
