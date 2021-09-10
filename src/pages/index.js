import React from 'react';

import { Layout, Seo } from '../components';
import Hero from '../components/home/Hero';
import CardGrid from '../components/home/CardGrid';

export default function IndexPage() {
  return (
    <Layout>
      <Seo description="Home page for a Gatsby Starter, featuring Emotion and Tailwind css" />
      <Hero />
      <CardGrid />
    </Layout>
  );
}
