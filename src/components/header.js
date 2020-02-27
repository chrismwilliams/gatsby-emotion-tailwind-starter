import React from 'react';
import { Link } from 'gatsby';
import tw from 'twin.macro';
import styled from '@emotion/styled';

// import { ToggleTheme } from './elements';

const StyledHeader = styled.header`
  ${tw`flex flex-wrap items-center shadow-md`};

  &::before {
    ${tw`block w-full`};
    content: '';
    background: linear-gradient(
      90deg,
      #663399 0%,
      #b721ff 20%,
      #ffb238 60%,
      #73fff7 95%
    );
    height: 5px;
  }
  nav {
    ${tw`flex-1`};
  }
`;

const StyledUL = styled.ul`
  ${tw`flex flex-wrap justify-center sm:justify-between items-center`};
  li {
    ${tw`flex-grow sm:flex-grow-0 text-xl font-bold uppercase text-center`};
    &.logo {
      ${tw`sm:mr-auto min-w-full sm:min-w-0`};
      a {
        ${tw`py-4 sm:py-2 flex justify-center items-center`};
        color: var(--logoTitle);
      }
    }
    &:nth-of-type(n + 2) {
      a {
        ${tw`block px-6 md:px-10 py-8`};
        &:hover {
          background: linear-gradient(
              90deg,
              #663399 0%,
              #b721ff 20%,
              #ffb238 60%,
              #73fff7 95%
            )
            fixed;
        }
      }
    }
  }
`;

const Logo = styled.div`
  ${tw`sm:ml-8 w-16`};
  svg {
    ${tw`h-full`};
  }
`;

export default function header() {
  return (
    <StyledHeader>
      <nav role="navigation">
        <StyledUL>
          <li className="logo">
            <Link to="/" aria-label="Homepage">
              <Logo>
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
              </Logo>
              Gatsby Starter
            </Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </StyledUL>
      </nav>
      {/* <ToggleTheme /> */}
    </StyledHeader>
  );
}
