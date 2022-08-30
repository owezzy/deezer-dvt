import {
  animate,
  animation,
  query,
  stagger,
  style,
  transition,
  trigger,
  useAnimation,
} from '@angular/animations';

export const fadeInAnimation = animation(
  [
    // keys are css properties.
    // Apply styles immediately.
    // opacity 0 makes element invisible.
    style({ transform: 'translateY(-3%)', opacity: 0 }),

    // applies style over specified period of time.
    animate(
      '{{ duration }} {{ easing }}',
      style({ transform: 'translateY(0%)', opacity: 1 })
    ),
  ],
  {
    params: {
      duration: '500ms',
      easing: 'ease-in-out',
    },
  }
);

// default app animation.
export const routeAnimations = trigger('routeAnimations', [
  transition('void <=> *', useAnimation(fadeInAnimation)),
  transition('* <=> *', useAnimation(fadeInAnimation)),
]);

// set on parent container containing array elements
export const elementAnimation = trigger('elementAnimation', [
  // define steps to run during the state transitions in the array.
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0 }),
        stagger(100, [
          style({ transform: 'translateY(10%)', opacity: 0 }),
          animate(
            '500ms ease-in-out',
            style({ transform: 'translateY(0%)', opacity: 1 })
          ),
        ]),
      ],
      { optional: true }
    ),
  ]),
]);
