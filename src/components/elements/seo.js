import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default function SEO({ title, description }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(seoQuery);
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: siteMetadata.siteUrl,
    author: siteMetadata.author,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s - ${siteMetadata.title}`}
    >
      <html lang="en-GB" />
      <meta name="description" content={seo.description} />
      <meta property="og:locale" content="en_UK" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
};

const seoQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        siteUrl
      }
    }
  }
`;
