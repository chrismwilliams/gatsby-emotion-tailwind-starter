import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  ${tw`p-8 flex flex-col justify-center items-center text-white bg-gray-800`};
  a {
    ${tw`p-1 inline-block border-0 border-b border-dotted text-center text-sm sm:text-base font-semibold`}
  }
  p {
    ${tw`mt-4 text-sm text-gray-300 font-bold`};
  }
`;

export default StyledFooter;
