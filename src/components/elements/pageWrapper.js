import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  ${tw`font-sans font-normal`};
`;

export default function pageWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
