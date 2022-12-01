import { assign, createMachine } from 'xstate';



interface ResultMessageCtx {
    thumbnail: string;
    message: string;
    result: Result;
}

// TODO Create interfaces

enum Result {
    success = 'defused',
    failure = 'exploded',
}

// create the context type

enum ResultMessageType {
    success = 'success',
    failure = 'failure',
}


enum ResultMessageImage {
    success = 'https://media.giphy.com/media/3o7TKSjRrfIPjeiVy0/giphy.gif',
    failure = 'https://media.giphy.com/media/3o7TKSjRrfIPjeiVy0/giphy.gif',
}



// Create a defaut context setting
const getDefaultContext = (): ResultMessageCtx => ({
    thumbnail: ResultMessageImage.failure,
    message: ResultMessageType.failure,
    result: Result.failure,
});

export const dynamicResultMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QHcCWAnMBZAhgYwAtUA7MAOgFdi8KAXAYgGE6ACWgsFgdQzAG0ADAF1EoAA4B7WKlqoJxUSAAeiAEwBWAMxl1AdgAcARg0AaEAE9Ex9WVUAWXXr27NdgJybDdgL6+zxCQg4RTRMXEISMEVJaVl5RRUEYzNLJNUyAUzMzxc3fVVNVUM-EFDsfCJSSmo6aKkZOQUkZUQANgEUq0ydLIEczTyC1RKy8MryZlo62MaExDtNXR0Da06kgUMyXQcnXRd3Tx9fbyA */
// createMachine({
//   initial: 'uncut',
//   context: getDefaultContext(),
//   states: {
//     success: {
//       type: 'final',
//       description: 'The bomb was defused',
//     },
//     failure: {
//       description: 'The bomb was detonated',
//     },
//   },
//   id: 'ResultMessageCtx',
// });