import React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import globalStyles from '../../styles/global';

const StyledWrapper = styled.div`
  ${tw`font-sans font-normal`};
  background-color: var(--bgColor);
  color: var(--txtColor);
`;

export default function pageWrapper({ children }) {
  return (
    <StyledWrapper>
      <Global styles={globalStyles} />
      {children}
    </StyledWrapper>
  );
}
