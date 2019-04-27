import React from 'react';
import { graphql } from 'gatsby';
import Img from 'gatsby-image';
import styled from '@emotion/styled';

import { Layout, SEO, ContentWrapper, Card } from '../components/elements';

const AboutContent = styled.section`
  ${tw`mx-auto mt-12 max-w-xl`};

  a {
    ${tw`inline-block mt-4 ml-auto p-2 text-purple-dark text-sm font-semibold border-0 border-b border-dotted`};
  }
`;

const StyledFiller = styled.div`
  ${tw`p-32`};
`;

export default function aboutPage({ data }) {
  const { keyboardImg } = data;
  return (
    <Layout>
      <SEO title="About" description="About Us page" />
      <ContentWrapper>
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
      </ContentWrapper>
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
