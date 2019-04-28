import React from 'react';
import styled from '@emotion/styled';
import useTheme from '../hooks/useTheme';

const StyledCard = styled.div`
  ${tw`p-6 relative flex flex-col bg-white text-black shadow-md`};
  &.dark {
    ${tw`bg-black text-white`};
  }
  h3 {
    ${tw`mb-5 text-2xl text-center`};
  }
`;

export default function card({ title, children }) {
  const { getThemeMode } = useTheme();
  return (
    <StyledCard className={getThemeMode}>
      {title && <h3>{title}</h3>}
      {children}
    </StyledCard>
  );
}
