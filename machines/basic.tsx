import { createMachine } from 'xstate';

export const basic = createMachine({
  predictableActionArguments: true,
  id: "basic",
  initial: "idle",
  states: {
    idle: {
      on: {
        FETCH: {
          target: "loading",
        },
      },
    },
    loading: {
      on: {
        RESOLVE: {
          target: "success",
        },
        REJECT: {
          target: "failure",
        },
      },
    },
    success: {
      type: "final",
    },
    failure: {
      on: {
        RETRY: {
          target: "loading",
        },
      },
    },
  },
});