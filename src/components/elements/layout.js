import React from 'react';

import PageWrapper from './page-wrapper';
import Header from '../header';
import Footer from '../footer';

export default function Layout({ children }) {
  return (
    <PageWrapper>
      <Header />
      {children}
      <Footer />
    </PageWrapper>
  );
}
