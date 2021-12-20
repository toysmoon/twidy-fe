const path = require('path');
const resolvePath = (_path) => path.join(process.cwd(), _path);
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

const postcss = {
  name: '@storybook/addon-postcss',
  options: {
    postcssLoaderOptions: {
      implementation: require('postcss'),
    },
  },
};

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', postcss],
  webpackFinal: async (config) => {
    config.resolve.plugins.push(new TsconfigPathsPlugin({}));

    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          '@emotion/core': resolvePath('node_modules/@emotion/react'),
          '@emotion/styled': resolvePath('node_modules/@emotion/styled'),
          'emotion-theming': resolvePath('node_modules/@emotion/react'),
        },
      },
    };
  },
};
