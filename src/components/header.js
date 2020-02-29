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
              <svg
                width="38"
                height="68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 35.0667L23.0662 2v30.9333h13.1664L15.1664 66V35.0667H2z"
                  fill="#FFB238"
                  stroke="#639"
                  stroke-width="3"
                  stroke-linejoin="round"
                />
              </svg>
            </Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </nav>
    </StyledHeader>
  );
}
