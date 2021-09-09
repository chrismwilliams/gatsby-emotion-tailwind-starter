const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
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
