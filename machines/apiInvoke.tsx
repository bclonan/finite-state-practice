// Path: extra\expo-xstate-boilerplate\base-xstate\machines\apiInvoke.tsx
import { assign, createMachine } from 'xstate';

export const apiInvoke = createMachine({
    predictableActionArguments: true,
    id: 'apiInvoke',
    initial: 'idle',
    context: {
        input: '',
        result: '',
        error: '',
    },
    states: {
        idle: {
            on: {
                FETCH: {
                    target: 'loading',
                    actions: assign({
                        input: (_, event) => event.input,
                    }),
                },
            },
        },
        loading: {
            invoke: {
                src: 'fetch',
                onDone: {
                    target: 'success',
                    actions: assign({
                        result: (_, event) => event.data,
                    }),
                },
                onError: {
                    target: 'failure',
                    actions: assign({
                        error: (_, event) => event.data,
                    }),
                },
            },
        },
        success: {
            on: {
                RETRY: 'loading',
            },
        },
        failure: {
            on: {
                RETRY: 'loading',
            },
        },
    },
});

