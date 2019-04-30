import React from 'react';

import { ThemeProvider } from '../../context/theme';
import 'typeface-open-sans';

import PageWrapper from './pageWrapper';
import Header from '../header';
import Footer from '../footer';

export default function Layout({ children }) {
  return (
    <ThemeProvider>
      <PageWrapper>
        <Header />
        {children}
        <Footer />
      </PageWrapper>
    </ThemeProvider>
  );
}
