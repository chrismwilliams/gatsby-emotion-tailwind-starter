import React from 'react';

import Nav from './Nav';
import ThemeToggle from './ThemeToggle';
import StyledHeader from './styled/header';

export default function Header() {
  return (
    <StyledHeader>
      <Nav />
      <ThemeToggle />
    </StyledHeader>
  );
}
