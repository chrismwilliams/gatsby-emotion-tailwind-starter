import React from 'react';
import styled from '@emotion/styled';

const StyledWrapper = styled.div`
  ${tw`max-w-4xl mx-auto px-8 py-16`};
`;

export default function contentWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
