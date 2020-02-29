import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
  &::before {
    ${tw`block w-full`};
    content: '';
    background: linear-gradient(
      90deg,
      #663399 0%,
      #b721ff 20%,
      #ffb238 60%,
      #73fff7 95%
    );
    height: 5px;
  }
  nav {
    > ul {
      ${tw`flex flex-wrap justify-center sm:justify-between`};
      li {
        ${tw`flex-grow sm:flex-grow-0 text-xl text-center`};
        &.logo {
          ${tw`sm:mr-auto min-w-full sm:min-w-0`};
          a {
            ${tw`px-8 py-4 flex justify-center items-center`};
          }
        }
        &:not(.logo) {
          a {
            ${tw`block px-6 md:px-10 py-8`};
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
