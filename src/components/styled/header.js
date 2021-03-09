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
            ${tw`flex items-center p-3 text-lg tracking-wide text-gray-600 border-b-2 border-transparent hover:border-gray-600 md:(ml-0 px-10)`};
          }
        }
      }
    }
  }
`;

export default StyledHeader;
