import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledSocialList = styled.div`
  ${tw`text-4xl`};
  ul {
    ${tw`flex justify-between items-center`};
    li {
      ${tw`mx-2 flex items-center`};
      a {
        ${tw`p-2`};
      }
    }
  }
`;

export default StyledSocialList;
