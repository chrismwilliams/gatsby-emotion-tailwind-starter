import React from 'react';
import { Link } from 'gatsby';

import StyledHeader from './styled/header';

export default function header() {
  return (
    <StyledHeader>
      <nav role="navigation">
        <ul>
          <li className="logo">
            <Link to="/" aria-label="Homepage">
              <svg>
                <use xlinkHref="/logo.svg#logo" />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
