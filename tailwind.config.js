const defaultTheme = require('tailwindcss/defaultTheme');

// gatsby-plugin-purgecss already handling unused css.
module.exports = {
  purge: {
    enabled: false,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  variants: {},
  plugins: [],
};
