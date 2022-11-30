module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'module:metro-react-native-babel-preset'],
    env: {
      production: {
        plugins: ['transform-remove-console'],
      },
    },
    plugins: [
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: [
            '.ios.js',
            '.android.js',
            '.ios.jsx',
            '.android.jsx',
            '.jsx',
            '.js',
            '.json',
            '.ts',
            '.tsx',
          ],
          alias: {
            '@machines': './machines',
            '@components': './app/components',
            '@views': './app/views',
          },
        },
      ],
      'react-native-reanimated/plugin',
    ],
  };
};