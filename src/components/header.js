import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

const StyledHeader = styled.header`
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
`;

const StyledUL = styled.ul`
  ${tw`flex items-center`};
  > li {
    ${tw`text-xl text-black font-bold uppercase`};
    &.logo {
      ${tw`mr-auto flex items-center`};
      color: #663399;
    }
    a {
      ${tw`block px-10 py-8`};
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
`;

const Logo = styled(Img)`
  ${tw`ml-8 mr-3 w-12 h-full`};
`;

export default function header() {
  return (
    <StaticQuery
      query={logoQuery}
      render={({ siteLogo }) => {
        return (
          <StyledHeader>
            <nav role="navigation">
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
          </StyledHeader>
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
