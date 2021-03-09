import tw from 'twin.macro';
import styled from '@emotion/styled';

import StyledFooter from '../../styled/footer';

const StyledSocialList = styled.ul`
  ${tw`flex items-center justify-between`};
  li {
    ${tw`flex items-center mx-2`};
    a {
      ${tw`p-2`};
    }
  }

  ${StyledFooter} & {
    ${tw`mt-4 text-2xl`}
    svg {
      ${tw`block w-6!`};
    }
  }
`;

export default StyledSocialList;
