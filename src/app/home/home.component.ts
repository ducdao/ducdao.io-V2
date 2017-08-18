import { GetCardsService } from './../get-cards.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private getCardsService: GetCardsService) { }

  ngOnInit() {
    console.log("Duc v1");
    // Get card information from firebase
  }
}
