const defaultTheme = require('tailwindcss/defaultTheme');

// gatsby-plugin-purgecss already handling unused css.
module.exports = {
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
