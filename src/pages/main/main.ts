import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../core/components/Card';
import { Cards } from '../../core/components/Cards';
import { test, cards } from './mockCards';
import * as $ from 'jquery';

@Component({
  selector: 'page-main',
  templateUrl: 'main.html'
})
export class MainPage implements OnInit {

  cards: Cards = new Cards(cards);
  currentCard: Card;

  constructor(public navCtrl: NavController) {
    this.currentCard = this.cards.first();
  }

  nextCard(data: { nextId: string, dir: string }) {
    this.update(500);
    this.cards.pushHistory(this.currentCard.id, data.dir === 'left' ? 'no' : 'yes');
    this.currentCard = this.cards.next(data.nextId);
    $('.description').html(this.currentCard.description);
  }

  update(time) {
    $('#content').css({ display: 'none' });
    setTimeout(() => {
      $('#content').css({ display: 'block' });
    }, time);
  }

  ngOnInit() {
    $('.description').html(this.currentCard.description);
  }

}
