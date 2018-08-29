import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ViewChildren, QueryList, ElementRef, ApplicationRef } from '@angular/core';
import { Card } from '../../../../core/components/Card';
import * as $ from 'jquery';
import { StackConfig,  DragEvent,  SwingStackComponent,  SwingCardComponent,} from 'angular2-swing';
import { PlayerService } from '../../../../core/service/playerService';

@Component({
  selector: 'game-card',
  templateUrl: 'card.html'
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;

  @Output()
  nextCard = new EventEmitter<{ nextId: string, dir: string }>();

  cards: any[] = [ 0 ];
  counter: number;

  @ViewChild('myswing') swingStack: SwingStackComponent;
  @ViewChildren('mycards') swingCards: QueryList<SwingCardComponent>;

  reset: boolean;

  stackConfig: StackConfig;

  constructor(private playerService: PlayerService, private appRef: ApplicationRef) {
    this.counter = 0;
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: d => {
        return 0;
      },
    };
  }

  ngAfterViewInit() {
    // this.swingStack.throwin.subscribe((event: DragEvent) => {
    //   event.target.style.borderColor = '#color';
    // });
  }


  onItemMove(element, x, y, r) {
    let color = '';
    let abs = Math.abs(x);
    let min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));

    if (x > 0 ) {
      $('.card-yes').css('font-size', abs / 55 + 15);
      if($('#deck').width() * 0.6 - 20 > abs) {
        $('.card-yes').css('right', abs + 20);
      } else {
        $('.card-yes').css('right', $('#deck').width() * 0.6 - 10);
      }
      $('.card-no').css('font-size', 15);
      $('.card-no').css('left', -abs + 20);
    } else {
      $('.card-no').css('font-size', abs / 55 + 15);
      if($('#deck').width() * 0.6 - 20 > abs) {
        $('.card-no').css('left', abs + 20);
      } else {
        $('.card-no').css('left', $('#deck').width() * 0.6 - 10);
      }
      $('.card-yes').css('font-size', 15);
      $('.card-yes').css('right', -abs + 20);
    }

    element.style[
      'transform'
    ] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  cardSwiped(dir: string) {
    this.update(500);
    const paramsSelected = dir === 'left' ? this.card.answerParam.no : this.card.answerParam.yes;
    this.playerService.update(paramsSelected);
    this.nextCard.emit({ nextId: paramsSelected.nextCard, dir: dir });
  }

  update(time: number): void {
    this.cards.pop();
    setTimeout(() => {
      this.cards.push(++this.counter);
      this.appRef.tick();
    }, time);
  }

  ngOnInit() {
  }
  
}
