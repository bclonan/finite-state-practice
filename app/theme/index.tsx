import React from 'react';
import { NativeBaseProvider, extendTheme } from 'native-base';

const customTheme = extendTheme({
    space: {
      'space-2': '29px',
    },
    components: {
      Button: {
        variants: {
          brand: {
            p: '10',
            bg: 'brand.500',
          },
        },
      },
    },
});

// 2. Get the type of the CustomTheme
type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
declare module 'native-base' {
  interface ICustomTheme extends CustomThemeType {}
}

export const Theme = ({ children }) => {
    return <NativeBaseProvider theme={customTheme}>{children}</NativeBaseProvider>;
};