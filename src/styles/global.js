import { css } from '@emotion/core';
import { colors } from '../../tailwind';

// basic css reset
const injectGlobal = css`
  :root {
    --white: ${colors.white};
    --black: ${colors.black};
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }
  html {
    text-rendering: optimizeLegibility;
    overflow-x: hidden;
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body.light {
    --bgColor: var(--white);
    --txtColor: var(--black);
    --logoTitle: ${colors['purple-dark']};
    --heroBg: ${colors['grey-lightest']};
    --cardColor: var(--white);
    --footerColor: ${colors['teal-dark']};
  }
  body.dark {
    --bgColor: ${colors['grey-darkest']};
    --txtColor: var(--white);
    --logoTitle: ${colors['orange-light']};
    --heroBg: var(--black);
    --cardColor: var(--black);
    --footerColor: ${colors['indigo-darkest']};
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  ul {
    list-style-type: none;
  }
  textarea {
    font-family: inherit;
  }
`;

export default injectGlobal;
