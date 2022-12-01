import { createMachine } from 'xstate';

export const machine = 
/** @xstate-layout N4IgpgJg5mDOIC5QBsCWUAWAXARgV2RwDoB7AMzIGIAVAVQCUA5AfQHlGBtABgF1FQADiViosqEgDt+IAB6IAjAGYAbABoQAT0QAmefIC++9Wky4CxE9lYSaDFqwBiD7nyQghIsZOlyE85WqaiAAcikQArIbG6Nj4hKQUlAAyAJIA4gAS1MwAQvSsANIAopy80h6i4lJuvgC0esFEoQAswUrNAJwdevId6lp+AOxcRM3+AROTyh2GRiASJBBw0pZmhOXCld41iPUBTYqt7V09fUEItcpRIKtxxORkG55VPojN2v0hjd1Tv4PXt3MRFW1ieW2qoF8ii4yiIHRh2nCnwQ3VG41+E3+c0B8RwACcSABrMAQ9ybLykurBZHaRFojGTGazIA */
createMachine({
  predictableActionArguments: true,
  id: 'lightbulb',
  initial: 'off',
  states: {
    off: {
      on: {
        TURN_ON: {
          target: 'lightOn',
        },
        LIGHT_BROKEN: {
          target: 'broken',
        },
      },
    },
    lightOn: {
      on: {
        TURN_OFF: {
          target: 'off',
        },
        LIGHT_BROKEN: {
          target: 'blewUp',
        },
      },
    },
    broken: {},
    blewUp: {},
  },
});