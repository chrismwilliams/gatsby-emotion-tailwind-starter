import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';
import { LightBackground, DarkBackground } from '@layout/styles/baseStyles';

export default function SEO({ title, description }) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(seoQuery);
  const seo = {
    title: title || siteMetadata.title,
    description: description || siteMetadata.description,
    url: siteMetadata.siteUrl,
    author: siteMetadata.author,
    locale: siteMetadata.locale,
  };
  return (
    <Helmet
      title={title}
      defaultTitle={siteMetadata.title}
      titleTemplate={`%s - ${siteMetadata.title}`}
    >
      <html lang={seo.locale} />
      <meta name="description" content={seo.description} />
      <meta property="og:locale" content={seo.locale} />
      <meta property="og:type" content="website" />
      <meta
        name="theme-color"
        content={LightBackground}
        media="(prefers-color-scheme: light)"
      />
      <meta
        name="theme-color"
        content={DarkBackground}
        media="(prefers-color-scheme: dark)"
      />
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:url" content={seo.url} />
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string,
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
        locale
      }
    }
  }
`;
