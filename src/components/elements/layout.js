import React from 'react';

import PageWrapper from './pageWrapper';
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
