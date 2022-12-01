import {createMachine} from 'xstate';

export const machine = createMachine({
  id: 'broccolis-wakefullness',
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
  schema: {
    context: {} as {},
    events: {} as {type: 'Wakes Up'} | {type: 'Falls Asleep'},
  },
  context: {},
  predictableActionArguments: true,
  preserveActionOrder: true,
});
