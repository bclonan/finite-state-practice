import React from 'react';
import { NativeBaseProvider } from 'native-base';
import { customTheme } from './theme/index';
import { Scene } from './demos/bombGame';

export default function App() {

    return (
      <NativeBaseProvider theme={customTheme}>
        <Scene />
      </NativeBaseProvider>
    );
  }