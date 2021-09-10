import React from 'react';
import { Link } from 'gatsby';

import StyledNav from './styled/nav';

export default function Nav() {
  return (
    <StyledNav aria-label="Main Navigation">
      <Link to="/" aria-label="Homepage" className="logo">
        <svg aria-hidden="true" focusable="false">
          <use xlinkHref="/logo.svg#logo" />
        </svg>
      </Link>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
    </StyledNav>
  );
}
