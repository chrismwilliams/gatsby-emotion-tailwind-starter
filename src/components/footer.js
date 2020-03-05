import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import StyledFooter from './styled/footer';
import SocialList from './elements/social-list';

export default function Footer() {
  const {
    site: { siteMetadata },
  } = useStaticQuery(AuthorQuery);
  return (
    <StyledFooter>
      <SocialList id="links" />
      <p>Created by {siteMetadata.author}</p>
    </StyledFooter>
  );
}

const AuthorQuery = graphql`
  query {
    site {
      siteMetadata {
        author
      }
    }
  }
`;
