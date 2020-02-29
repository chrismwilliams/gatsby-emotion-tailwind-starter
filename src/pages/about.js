import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import tw from 'twin.macro';
import styled from '@emotion/styled';

import { Layout, SEO, Card } from '../components/elements';

const AboutContent = styled.section`
  ${tw`mx-auto mt-12 max-w-xl`};

  a {
    ${tw`mt-4 ml-auto p-1 inline-block text-sm font-semibold border-0 border-b border-dotted`};
  }
`;

const StyledFiller = tw.div`p-32`;

export default function aboutPage({ data }) {
  const { keyboardImg } = data;
  return (
    <Layout>
      <SEO title="About" description="About Us page" />
      <h1>About Page</h1>
      <AboutContent>
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
        <StyledFiller />
      </AboutContent>
    </Layout>
  );
}

export const aboutQuery = graphql`
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
