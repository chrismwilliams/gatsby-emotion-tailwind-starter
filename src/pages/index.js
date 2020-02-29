import React from 'react';

import { Layout, SEO, Hero, CardGrid } from '../components/elements';

export default function indexPage() {
  return (
    <Layout>
      <SEO
        title="Home"
        description="Home page for a Gatsby Starter, featuring Emotion and Tailwind css"
      />
      <Hero />
      <CardGrid />
    </Layout>
  );
}
