import { css } from '@emotion/core';

// basic css reset
const injectGlobal = css`
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
  html,
  body {
    width: 100%;
    height: 100%;
    background-color: #fff;
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
