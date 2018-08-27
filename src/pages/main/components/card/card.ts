import { Component, OnInit, Output, EventEmitter, Input, ViewChild, ViewChildren, QueryList  } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Card } from '../../../../core/components/Card';
import * as $ from 'jquery';
import { StackConfig,  DragEvent,  SwingStackComponent,  SwingCardComponent,} from 'angular2-swing';

@Component({
  selector: 'game-card',
  templateUrl: 'card.html'
})
export class CardComponent implements OnInit {
  @Input()
  card: Card;

  @Output()
  nextCard = new EventEmitter<void>();

  canSwipe: boolean = true;
  @ViewChild('myswing1') swingStack: SwingStackComponent;
  @ViewChildren('mycards1') swingCards: QueryList<SwingCardComponent>;

  stackConfig: StackConfig;

  constructor() {
    this.stackConfig = {
      throwOutConfidence: (offsetX, offsetY, element) => {
        return Math.min(Math.abs(offsetX) / (element.offsetWidth / 2), 1);
      },
      transform: (element, x, y, r) => {
        this.onItemMove(element, x, y, r);
      },
      throwOutDistance: d => {
        return 1200;
      },
    };
  }

  ngAfterViewInit() {
    this.swingStack.throwin.subscribe((event: DragEvent) => {
      event.target.style.borderColor = '#color';
    });
  }


  onItemMove(element, x, y, r) {
    var color = '';
    var abs = Math.abs(x);
    let min = Math.trunc(Math.min(16 * 16 - abs, 16 * 16));
    let hexCode = this.decimalToHex(min, 2);

    if (x == 0) {
      color = '#f2ebeb';
    } else if (x < 0) {
      color = '#FF' + hexCode + hexCode;
    } else {
      color = '#' + hexCode + 'FF' + hexCode;
    }
    element.style.borderColor = color;
    element.style[
      'transform'
    ] = `translate3d(0, 0, 0) translate(${x}px, ${y}px) rotate(${r}deg)`;
  }

  cardSwiped(dir: string) {
      if(dir === 'left') {
          console.log('left')
      }
      else if(dir === 'right'){
          console.log('right');
      }
;  }

  decimalToHex(d, padding) {
    var hex = Number(d).toString(16);
    padding =
      typeof padding === 'undefined' || padding === null
        ? (padding = 2)
        : padding;
    while (hex.length < padding) {
      hex = '0' + hex;
    }
    return hex;
  }

  // swipe(event) {
  //   if(this.canSwipe){
  //     this.canSwipe = false;
  //     if(event.direction == 2) {
  //       $('#card').css('animation', 'swipeLeft 0.5s ease-in');
  //     }
  //     else if(event.direction == 4) {
  //       $('#card').css('animation', 'swipeRight 0.5s ease-in');
  //     }
  //     setTimeout(() => {
  //       $('#card').css('animation', '');
  //       this.canSwipe = true;
  //       this.nextCard.emit();
  //     }, 500);
  //   }
  // }

  ngOnInit() {
  }
  
}
