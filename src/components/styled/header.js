import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  ${tw`before:content`};
  nav {
    ${tw`md:pl-12`};
    > ul {
      ${tw`flex flex-wrap justify-center sm:justify-between`};
      li {
        ${tw`text-xl text-center`};
        &.logo {
          ${tw`mr-auto`};
          a {
            ${tw`flex items-center px-2 py-2 md:(justify-center px-4)`};
            svg {
              ${tw`block`};
              width: 38px;
              height: 68px;
            }
          }
        }
        &:not(.logo) {
          a {
            ${tw`flex items-center min-h-full p-3 text-lg font-light tracking-wide text-gray-600 md:(ml-0 py-8 px-10) hover:text-orange-500`};
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
