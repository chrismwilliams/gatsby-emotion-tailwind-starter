import React from 'react';

import { Nav } from './';
import { ThemeToggle } from '@common';
import { StyledHeader } from './styles';

export default function Header() {
  return (
    <StyledHeader>
      <Nav />
      <ThemeToggle />
    </StyledHeader>
  );
}
