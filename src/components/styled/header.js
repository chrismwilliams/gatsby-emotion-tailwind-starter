import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  ${tw`before:content`};
  nav {
    ${tw`md:pl-12`};
    > ul {
      ${tw`flex flex-wrap items-center justify-center sm:justify-between`};
      li {
        ${tw`text-xl text-center`};
        &.logo {
          ${tw`mr-auto`};
          a {
            ${tw`flex items-center px-2 py-2 md:justify-center md:px-4`};
            svg {
              ${tw`block`};
              width: 38px;
              height: 68px;
            }
          }
        }
        &:not(.logo) {
          a {
            ${tw`block ml-4 p-3 md:ml-0 md:py-8 md:px-10`};
            &:hover {
              background: linear-gradient(
                  90deg,
                  #663399 0%,
                  #b721ff 20%,
                  #ffb238 60%,
                  #73fff7 95%
                )
                fixed;
            }
          }
        }
      }
    }
  }
`;

export default StyledHeader;
