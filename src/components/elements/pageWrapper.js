import React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import globalStyles from '../../styles/global';

const StyledWrapper = styled.div`
  ${tw`text-black font-sans font-normal bg-white`};
`;

export default function pageWrapper({ children }) {
  return (
    <StyledWrapper>
      <Global styles={globalStyles} />
      {children}
    </StyledWrapper>
  );
}
