import tw, { styled } from 'twin.macro';

const StyledCardGrid = styled.article`
  ${tw`mt-20 md:mt-32`};

  section {
    h2,
    > p {
      ${tw`px-2 md:(text-center px-0)`};
    }

    h2 {
      ${tw`text-3xl font-bold md:text-4xl`};
    }

    > p {
      ${tw`mx-auto mt-4 text-lg font-light tracking-wider md:(text-xl w-2/3)`};
    }

    .cards {
      ${tw`grid mt-16 gap-x-6 gap-y-10 justify-center grid-template-columns[repeat(auto-fit, minmax(250px, 1fr))]`};
    }
  }
`;

export default StyledCardGrid;
