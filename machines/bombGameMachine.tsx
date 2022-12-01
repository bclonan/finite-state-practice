import {  createMachine } from 'xstate';

// create the context type
interface Context {
    difficulty: string;
    secret: string;
    guess: string;
    defused: boolean;
}

// Create a defaut context setting
const getDefaultContext = (): Context => ({
    difficulty: 'easy',
    secret: '',
    guess: '',
    defused: false,
});

const context = getDefaultContext();

export const bombGameMachine = 
/** @xstate-layout N4IgpgJg5mDOIC5QCMD2BbZBxAhusAsjgMYAWAlgHZgB05EANmAMQDKAKgIIBK7A+lk4EAogG0ADAF1EoAA6pY5AC7lUlGSAAeiACzia4w+ICMAVgBMpgBwB2KwE5xANgA0IAJ6JzxqwF9fbmiYuPhEZFS0sGBKAK6yzAAK3MKsrHwcPOwS0kgg8ooqahraCOb25jQOznqWtlWuHohWOjQ69u32Nt6mpsbm5jr+gRjYeIQkFNQ0sgw47lRQzABiAJIAciusABLCACICQmJSGvnKquq5JTo29gY6TlW1do4NnqU+-gEglKgQcBpBUahCYRE4KM5FS6IAC0NhoHXszRsOj6xnE9gAzDZTG43tCnAYjCY+k5TDYnNjTEMQICQuNwlN6EwwQVzsUvE4KuJruTulYqlZcV4MfpjIjTOIrGjTOUuhjqbSxmFJpFonEWRCLqASsYbPpHOSMWYyhiykKEFYMTQJYZdd46sYdIMvorgQzaDM5gsNYUtVpdI47g9HE96ubLdaFSM6cqIjQAGZUciwUiQH1sqEIJwY27mcRGmrWZ7GcNWqmfIA */
createMachine({
  context: context,
  schema: {
    context: {} as {},
    events: {} as
      | {type: 'idle'}
      | {type: 'setup'}
      | {type: 'playing'}
      | {type: 'completed'},
  },
  preserveActionOrder: true,
  predictableActionArguments: true,
  id: 'bombGameMachine',
  initial: 'idle',
  states: {
    idle: {
      on: {
        START_GAME: {
          target: 'setup',
        },
      },
    },
    setup: {
      on: {
        PRESS_START: {
          target: 'playing',
        },
      },
    },
    playing: {
      on: {
        FINISHED_GAME: {
          target: 'finished',
        },
      },
    },
    finished: {},
  },
});
