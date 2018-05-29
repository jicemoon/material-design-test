import {
  trigger,
  animate,
  transition,
  style,
  state
} from '@angular/animations';
export function getFadeTransAnimaiton (dis = 280) {
  return trigger('fadeTransAnimation', [
    transition('void => *', [
      style({
        opacity: 0,
        transform: `translateX(${dis}px)`
      }),
      animate('0.1s ease-in', style({
        opacity: 1,
        transform: 'translateX(0)'
      }))
    ]),
    transition('* => void', [
      style({
        opacity: 1,
        transform: 'translateX(0)'
      }),
      animate('0.1s ease-out', style({
        opacity: 0,
        transform: `translateX(${dis}px)`
      }))
    ])
  ]);
}
