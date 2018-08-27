import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../core/components/Card';
import { Cards } from '../../core/components/Cards';
import { test, cards } from './mockCards';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage {

  cards: Cards = new Cards(cards);
  currentCard: Card;

  constructor(public navCtrl: NavController) {
    this.currentCard = this.cards.first();
  }

  nextCard() {
    this.currentCard = this.cards.next();
    console.log('next');
  }

}
