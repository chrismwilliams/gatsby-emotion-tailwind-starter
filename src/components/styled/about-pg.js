import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledAboutPg = styled.section`
  ${tw`mt-32 mx-auto px-8`};

  h1 {
    ${tw`text-6xl font-bold text-indigo-700 leading-tight`};
  }

  .card-wrapper {
    ${tw`mt-32`};
    a {
      ${tw`mt-4 ml-auto p-1 inline-block text-sm font-semibold border-b border-dotted`};
    }
  }
`;

export default StyledAboutPg;
