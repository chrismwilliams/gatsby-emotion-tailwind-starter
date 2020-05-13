import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledSocialList = styled.ul`
  ${tw`flex items-center justify-between`};
  li {
    ${tw`flex items-center mx-2`};
    a {
      ${tw`p-2`};
    }
  }
`;

export default StyledSocialList;
