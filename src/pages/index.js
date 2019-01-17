import React from 'react';
import { graphql } from 'gatsby';

import { Layout, SEO, Hero } from '../components/elements';

class IndexPg extends React.Component {
  render() {
    const { data } = this.props;
    const siteTitle = data.site.siteMetadata.title;

    return (
      <Layout title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`starter`, `gatsby`, `javascript`, `react`]}
        />
        <Hero />
      </Layout>
    );
  }
}

export default IndexPg;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
