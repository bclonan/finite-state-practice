// import { createMachine } from 'xstate';

// export default basic = 
/** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOlwgBswBiAMQFEAVAYQAkBtABgF1FQAHAPaxcAF1yD8fEAA9EARgBsikpzVqATIoAsagKwAOAJzaANCACeCg9pJ71nRXsUHFRxQHYAzAF8f5tCw8QlIKQXQIAihqACV6AGUAeQAZADV6Ll4kECERcUlpOQRdPRJtPS95bSrjeQMNI3MrBHkvFXt1bQaNeQ8PPT0-AIwcAmISMIio2PoAKXpmRkzpXLEJKWyipRUHTi1dTkMTJsQDLzsHDU55Z0MvQf8QQNGQkgAzdFwKAFcAJxo4owYgBNZbZVb5DagLbKVSXHT6YxmSwKLy2XZdIw9PoDPyPfCCCBwaTPYLEFbCNYFTaIAC0ihOCFppSMrNZHkORj68iU8iGTxGZNI5CoFLy60KiC6jLq6Ic8k4lWqHla-NJY1C4Ui+CgYqpUNkiA0rjKFVaBhsRnkGi8Rj0MvuJDZrIM-W0xg8JjVgo1JFg30wmDg8HBlMhkoQFR2lQ02g8DUcdQ0DtK-TU1rO8fkRjR3qCvo+Xz+YD14ZpxWTKIQFqd2wMipcdUVDz8QA */
// createMachine({
//   predictableActionArguments: true,
//   id: "(machine)",
//   initial: "idle",
//   states: {
//     idle: {
//       on: {
//         FETCH: {
//           target: "loading",
//         },
//       },
//     },
//     loading: {
//       on: {
//         RESOLVE: {
//           target: "success",
//         },
//         REJECT: {
//           target: "failure",
//         },
//       },
//     },
//     success: {
//       type: "final",
//     },
//     failure: {
//       on: {
//         RETRY: {
//           target: "loading",
//         },
//       },
//     },
//   },
// });

// Path: extra\expo-xstate-boilerplate\base-xstate\index.tsx
// Compare this snippet from extra\expo-xstate-boilerplate\base-xstate\App.tsx:
// import { StatusBar } from 'expo-status-bar';

// Path: extra\expo-xstate-boilerplate\base-xstate\machines\basic.tsx
import { assign, createMachine } from 'xstate';

export const basic = createMachine({
    predictableActionArguments: true,
    id: 'basic',
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

