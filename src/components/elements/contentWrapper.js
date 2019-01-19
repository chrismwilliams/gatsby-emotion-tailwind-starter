import React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  ${tw`max-w-4xl mx-auto px-2 md:px-8 py-8 md:py-16`};
`;

export default function contentWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
