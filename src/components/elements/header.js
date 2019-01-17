import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const StyledUL = styled.ul`
  ${tw`flex items-center`}
  > li {
    ${tw`text-xl text-black font-bold uppercase`}
    &.logo {
      ${tw`mr-auto flex items-center text-purple-dark`}
    }
    a {
      ${tw`block px-8 py-6 hover:bg-purple-light hover:text-white`};
    }
  }
`;

const Logo = styled(Img)`
  ${tw`ml-8 mr-3 w-12 h-full`}
`;

export default function header() {
  return (
    <StaticQuery
      query={logoQuery}
      render={({ siteLogo }) => {
        return (
          <header>
            <nav>
              <StyledUL>
                <li className="logo">
                  <Logo
                    fluid={siteLogo.childImageSharp.fluid}
                    alt="Gatsby Javascript Logo"
                  />
                  Gatsby Starter
                </li>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="about">About</Link>
                </li>
              </StyledUL>
            </nav>
          </header>
        );
      }}
    />
  );
}

const logoQuery = graphql`
  query LogoQuery {
    siteLogo: file(relativePath: { regex: "/gatsby.png/" }) {
      childImageSharp {
        fluid(maxWidth: 80) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
