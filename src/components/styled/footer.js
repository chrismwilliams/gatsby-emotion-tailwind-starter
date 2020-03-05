import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  ${tw`mt-40 p-24 flex flex-col justify-center items-center text-3xl text-white bg-indigo-500 hover:bg-indigo-700`};
  p {
    ${tw`mt-4 text-lg`};
  }
`;

export default StyledFooter;
