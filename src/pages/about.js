import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';

import { Layout, SEO, Card } from '../components/elements';
import StyledAboutPg from '../components/styled/about-pg';

export default function aboutPage({ data }) {
  const { keyboardImg } = data;
  return (
    <Layout>
      <SEO title="About" description="About Us page" />
      <StyledAboutPg>
        <h1>About me</h1>
        <Card>
          <Img fluid={keyboardImg.childImageSharp.fluid} />
          <a
            href="https://unsplash.com/photos/feXpdV001o4"
            rel="nofollow noopener noreferrer"
            target="_blank"
            aria-label="unsplash"
          >
            Photo by Anas Alshanti on Unsplash
          </a>
        </Card>
      </StyledAboutPg>
    </Layout>
  );
}

export const AboutQuery = graphql`
  query {
    keyboardImg: file(relativePath: { regex: "/keyboard.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1080) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
