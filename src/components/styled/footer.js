import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  ${tw`flex flex-col items-center justify-center mt-40 py-6 text-3xl text-gray-600 border-t-2`};
  a {
    ${tw`hover:text-orange-500`};
  }
  .title {
    ${tw`text-lg font-semibold text-purple-600`};
    svg {
      ${tw`inline-block w-10 mr-4`};
      max-width: 28px;
      max-height: 50px;
    }
  }
  .social-list {
    ${tw`mt-4 text-2xl`}
    svg {
      ${tw`block w-6!`};
    }
  }
  .author {
    ${tw`mt-2 text-sm font-light`};
    a {
      ${tw`tracking-wider border-b-2 border-orange-500`};
    }
  }
`;

export default StyledFooter;
