const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  // uses the class strat -> https://tailwindcss.com/docs/dark-mode#toggling-dark-mode-manually
  darkMode: 'class',
  // gatsby-plugin-purgecss already handling unused css.
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        turquoise: '#73fff7',
      },
      // custom css properties set in src/components/styled/baseStyles.js
      backgroundColor: {
        primary: 'var(--bg-primary)',
      },
      textColor: {
        primary: 'var(--text-primary)',
        dark: 'var(--text-dark)',
      },
    },
  },
  variants: {},
  plugins: [],
};
