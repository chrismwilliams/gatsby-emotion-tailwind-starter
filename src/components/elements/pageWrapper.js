import React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import { useThemeMode } from '../../hooks/useTheme';
import globalStyles from '../../styles/global';

const StyledWrapper = styled.div`
  ${tw`text-black font-sans font-normal bg-grey-white`};
  &.dark {
    ${tw`text-white bg-grey-darkest`};
  }
`;

export default function pageWrapper({ children }) {
  const mode = useThemeMode();
  return (
    <StyledWrapper className={mode}>
      <Global styles={globalStyles} />
      {children}
    </StyledWrapper>
  );
}
