import tw, { styled } from 'twin.macro';

import { StyledButton } from './';
import StyledFooter from './footer';

const StyledSocialList = styled.ul`
  ${tw`grid justify-center grid-flow-col gap-x-4`};
  li {
    ${tw`flex items-center`};
    & > ${StyledButton} {
      ${tw`p-2 text-2xl bg-transparent shadow-none ring-purple-500 hover:(bg-gray-100 text-gray-800) active:(bg-gray-100 text-gray-800) light:(text-gray-500 ring-gray-300 hover:(bg-gray-700 text-white) active:(bg-gray-700 text-white))`};
    }
  }

  ${StyledFooter} & {
    ${tw`text-2xl`}
    svg {
      ${tw`block w-6!`};
    }
  }
`;

export default StyledSocialList;
