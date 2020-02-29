import React from 'react';

import StyledCard from './styled/card';

export default function Card({ title, children }) {
  return (
    <StyledCard>
      {title && <h3>{title}</h3>}
      {children}
    </StyledCard>
  );
}
