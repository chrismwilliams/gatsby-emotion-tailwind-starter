import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledCardGrid = styled.div`
  ${tw`grid gap-6`};
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
`;

export default StyledCardGrid;
