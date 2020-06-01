import { Component, OnInit, Input } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from '@angular/animations';
import { CardModel } from '../models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  animations: [

    // Trigger animation cards array
    // trigger('cardAnimation', [
    //   // Transition from any state to any state
    //   transition('* => *', [
    //     // Initially the all cards are not visible
    //     query(':enter', style({ opacity: 0 }), { optional: true }),

    //     // Each card will appear sequentially with the delay of 300ms
    //     query(':enter', stagger('300ms', [
    //       animate('.5s ease-in', keyframes([
    //         style({ opacity: 0, transform: 'translateY(-50%)', offset: 0 }),
    //         style({ opacity: .5, transform: 'translateY(-10px) scale(1.1)', offset: 0.3 }),
    //         style({ opacity: 1, transform: 'translateY(0)', offset: 1 }),
    //       ]))]), { optional: true }),

    //     // Cards will disappear sequentially with the delay of 300ms
    //     query(':leave', stagger('300ms', [
    //       animate('500ms ease-out', keyframes([
    //         style({ opacity: 1, transform: 'scale(1.1)', offset: 0 }),
    //         style({ opacity: .5, transform: 'scale(.5)', offset: 0.3 }),
    //         style({ opacity: 0, transform: 'scale(0)', offset: 1 }),
    //       ]))]), { optional: true })
    //   ]),
    // ]),

    // Trigger animation for plus button
    trigger('plusAnimation', [

      // Transition from any state to any state
      transition('* => *', [
        query('.plus-card', style({ opacity: 0, transform: 'translateY(-40px)' })),
        query('.plus-card', stagger('100ms', [
          animate('1s 200ms ease-out', style({ opacity: 1, transform: 'translateX(0)' })),
        ])),
      ])
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input() card: CardModel;

  cards: CardModel[];

  constructor(
  ) { }

  ngOnInit() {
    if (this.card.strImgSrc === '' || this.card.strImgSrc == null) {
      this.card.strImgSrc = 'img.jpg';
    }
  }
}
