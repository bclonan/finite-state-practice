import {createMachine} from 'xstate';

export const machine = createMachine({
  id: 'broccolis-wakefullness',
  initial: 'asleep',
  states: {
    asleep: {
      on: {
        'Wakes Up': {
          target: 'awake',
        },
      },
    },
    awake: {
      on: {
        'Falls Asleep': {
          target: 'asleep',
        },
      },
    },
  },
});
