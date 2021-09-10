import React from 'react';
import { GlobalStyles } from 'twin.macro';
import { Global } from '@emotion/react';

import Header from './Header';
import Footer from './Footer';
import baseStyles from './styled/baseStyles';

export default function Layout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Global styles={baseStyles} />
      <a id="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer />
    </>
  );
}
