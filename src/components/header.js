import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import ToggleTheme from './elements/toggleThemeMode';
import useTheme from '../hooks/useTheme';

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
    ${tw`flex-grow sm:flex-no-grow text-xl font-bold uppercase text-center`};
    &.logo {
      ${tw`sm:mr-auto min-w-full sm:min-w-0`};
      a {
        ${tw`py-4 sm:py-2 flex justify-center items-center text-purple-dark`};
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
  &.dark {
    .logo a {
      ${tw`text-orange-light`};
    }
  }
`;

const Logo = styled(Img)`
  ${tw`sm:ml-8 w-16 h-full`};
`;

export default function header() {
  const { siteLogo } = useStaticQuery(LogoQuery);
  const { getThemeMode } = useTheme();

  return (
    <StyledHeader>
      <nav role="navigation">
        <StyledUL className={getThemeMode}>
          <li className="logo">
            <Link to="/">
              <Logo
                fluid={siteLogo.childImageSharp.fluid}
                alt="The site logo, showing a simple thunderbolt"
              />
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
      <ToggleTheme />
    </StyledHeader>
  );
}

const LogoQuery = graphql`
  query LogoQuery {
    siteLogo: file(relativePath: { regex: "/logo.png/" }) {
      childImageSharp {
        fluid(maxWidth: 100) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
