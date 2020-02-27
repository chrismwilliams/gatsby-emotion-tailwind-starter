import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';

const StyledCard = styled.div`
  ${tw`p-6 relative flex flex-col shadow-md`};
  h3 {
    ${tw`mb-5 text-2xl text-center`};
  }
`;

export default function card({ title, children }) {
  return (
    <StyledCard>
      {title && <h3>{title}</h3>}
      {children}
    </StyledCard>
  );
}
