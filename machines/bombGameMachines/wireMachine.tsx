import { assign, createMachine } from 'xstate';

interface colorOptions {
    text: string;
    value : string;
}

const colorOptions: colorOptions[] = [
    {text: 'Red', value: 'red'},
    {text: 'Blue', value: 'blue'},
    {text: 'Green', value: 'green'},
    {text: 'Yellow', value: 'yellow'},
    {text: 'White', value: 'white'},
    {text: 'Black', value: 'black'},
];


interface WireStateCtx {
    color? : colorOptions | undefined;
    isEnabled : boolean;
    hasWireCut : boolean;
}


// default wire state
// color : if 
// isEnabled = disabled if color is already selected 
// hasWireCut = false
const getDefaultContext = (): WireStateCtx => ({
    color: undefined,
    isEnabled: true,
    hasWireCut: false,
});


export const wireMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QHcCWAnMBZAhgYwAtUA7MAOgFdi8KAXAYgGE6ACWgsFgdQzAG0ADAF1EoAA4B7WKlqoJxUSAAeiAEwBWAMxl1AdgAcARg0AaEAE9Ex9WVUAWXXr27NdgJybDdgL6+zxCQg4RTRMXEISMEVJaVl5RRUEYzNLJNUyAUzMzxc3fVVNVUM-EFDsfCJSSmo6aKkZOQUkZUQANgEUq0ydLIEczTyC1RKy8MryZlo62MaExDtNXR0Da06kgUMyXQcnXRd3Tx9fbyA */
createMachine({
  initial: 'uncut',
  context: getDefaultContext(),
  states: {
    uncut: {
      description: 'The wire is not cut',
      on: {
        'Cut the Wire': {
          target: 'Cut',
        },
      },
    },
    Cut: {
      type: 'final',
      description: 'The wire is cut now',
    },
  },
  id: 'wireMachine',
});