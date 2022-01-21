import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { StyledFooter } from './styles';
import { SocialList } from '@common';

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(AuthorQuery);
  return (
    <StyledFooter>
      <p className="title">
        <svg aria-hidden="true" focusable="false">
          <use xlinkHref="/logo.svg#logo" />
        </svg>
        {siteMetadata.title}
      </p>
      <SocialList />
      <p className="author">
        Created by{' '}
        <a
          href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
          target="_blank"
          rel="noopener noreferrer"
        >
          {siteMetadata.author}
        </a>
      </p>
    </StyledFooter>
  );
}

const AuthorQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;
