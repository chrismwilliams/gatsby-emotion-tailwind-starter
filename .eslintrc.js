module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['tailwind-components', 'react'],
  globals: {
    graphql: false,
    tw: true,
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      ecmaVersion: 2018,
      jsx: true,
    },
  },
};
