import { trigger, style, animate, transition} from '@angular/animations';

export const fadeinAnimation = trigger('fadeinAnimation', [
    transition(':enter', [
      style({
        opacity: 0,
        transform: 'translateY(-2%)',
      }),
      animate(
        '400ms ease-in',
        style({
          opacity: 1,
          transform: 'translateY(0)',
        })
      ),
    ])
  ])