import tw, { styled } from 'twin.macro';

import StyledCardGrid from './cardGrid';

const StyledCard = styled.div`
  ${tw`relative grid grid-template-rows[minmax(min-content, 450px) 1fr]`};

  ${StyledCardGrid} & {
    ${tw`before:(absolute -inset-0.5 transition duration-200 bg-gradient-to-r from-purple-800 to-turquoise rounded-lg blur opacity-30) hover:before:opacity-70`};
    .gatsby-image-wrapper {
      max-height: 450px;
    }
    .card-content {
      ${tw`relative p-4 bg-primary`};
      .type {
        ${tw`text-sm font-light text-indigo-500 capitalize`};
      }
      h3 {
        ${tw`mt-3 text-xl font-semibold`};
      }
      p {
        ${tw`mt-4 font-light tracking-wide`};
      }
    }
  }
`;

export default StyledCard;
