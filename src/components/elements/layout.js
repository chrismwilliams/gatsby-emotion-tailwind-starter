import React from 'react';
import { GlobalStyles } from 'twin.macro';
import { Global } from '@emotion/react';

import PageWrapper from './page-wrapper';
import Header from '../header';
import Footer from '../footer';
import siteGlobalStyles from './styled/site-global-styles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Global styles={siteGlobalStyles} />
      <PageWrapper>
        <Header />
        {children}
        <Footer />
      </PageWrapper>
    </>
  );
}
