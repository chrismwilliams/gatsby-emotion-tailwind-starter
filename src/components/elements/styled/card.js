import tw from 'twin.macro';
import styled from '@emotion/styled';

import StyledCardGrid from './card-grid';

const StyledCard = styled.div`
  ${tw`relative flex flex-col overflow-hidden`};

  ${StyledCardGrid} & {
    ${tw`shadow-md md:rounded-lg hover:shadow-xl`};
    .gatsby-image-wrapper {
      max-height: 450px;
    }
    .card-content {
      ${tw`p-4`};
      .type {
        ${tw`text-sm font-light text-indigo-500 capitalize`};
      }
      h3 {
        ${tw`mt-3 text-xl font-semibold text-gray-800`};
      }
      p {
        ${tw`mt-4 font-light tracking-wide text-gray-600`};
      }
    }
  }
`;

export default StyledCard;
