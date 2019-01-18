import React from 'react';

import { Layout, SEO, ContentWrapper } from '../components/elements';

export default function notFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <ContentWrapper>
        <h1>Not Found!</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </ContentWrapper>
    </Layout>
  );
}
