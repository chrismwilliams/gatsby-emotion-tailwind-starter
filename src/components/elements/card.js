import React from 'react';

import StyledCard from './styled/card';

export default function Card({ children }) {
  return <StyledCard className="card-wrapper">{children}</StyledCard>;
}
