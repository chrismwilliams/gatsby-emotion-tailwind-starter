import tw, {css} from 'twin.macro';

const siteGlobalStyles = css`
  body {
    ${tw`font-sans`};
    &::before {
      ${tw`block w-full content`};
      background: linear-gradient(
        90deg,
        #663399 0%,
        #b721ff 20%,
        #ffb238 60%,
        #73fff7 95%
      );
      height: 3px;
    }
  }
`


export default siteGlobalStyles;