import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledCardGrid = styled.section`
  ${tw`mt-32 md:px-16`};

  h2,
  p {
    ${tw`px-2 md:(text-center px-0)`};
  }

  h2 {
    ${tw`text-4xl font-bold text-gray-900`};
  }

  > p {
    ${tw`mx-auto mt-4 text-xl font-light tracking-wider text-gray-600 md:(text-center w-2/3)`};
  }

  .cards {
    ${tw`grid mt-16 gap-x-6 gap-y-10`};
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`;

export default StyledCardGrid;
