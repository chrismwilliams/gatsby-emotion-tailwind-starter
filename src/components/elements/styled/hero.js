import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledHero = styled.div`
  ${tw`mt-32 px-8 grid grid-cols-5 grid-rows-1`};

  > div {
    ${tw`col-start-1 col-end-4`};
    &:first-of-type {
      ${tw`row-start-1 z-10`};
      h1 {
        ${tw`text-6xl font-bold text-indigo-700 leading-tight`};
      }
      p {
        ${tw`mt-12 text-3xl`};
      }
    }
    &.social {
      ${tw`mt-12 text-4xl w-3/5`};
      ul {
        ${tw`flex justify-between items-center`};
        li {
          ${tw`flex items-center`};
        }
      }
    }
  }

  span {
    ${tw`py-4 inline-block col-start-4 col-end-6 row-start-1`};
  }
`;

export default StyledHero;
