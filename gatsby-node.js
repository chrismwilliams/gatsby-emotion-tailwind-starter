const path = require('path');

exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@context': path.resolve(__dirname, 'src/context'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@common': path.resolve(__dirname, 'src/components/common'),
        '@layout': path.resolve(__dirname, 'src/components/layout'),
        '@home': path.resolve(__dirname, 'src/components/home'),
        '@about': path.resolve(__dirname, 'src/components/about'),
      },
      extensions: ['js'],
    },
  });
};
