import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledCard = styled.div`
  ${tw`relative flex flex-col overflow-hidden`};
  .card-content {
    ${tw`p-4`};
  }
`;

export default StyledCard;
