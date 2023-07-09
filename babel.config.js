module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'expo-router/babel',
      [
        'module-resolver',
        {
          root: ['./'],
          alias: {
            assets: './assets',
            'gluestack-components': './gluestack-components',
            app: './app',
            lib: './lib'
          }
        }
      ]
    ]
  };
};
