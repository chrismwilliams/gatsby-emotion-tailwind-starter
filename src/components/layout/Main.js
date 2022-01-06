import React from 'react';
import { GlobalStyles } from 'twin.macro';
import { Global } from '@emotion/react';

import { Header, Footer } from './';
import { baseStyles } from './styles';

export default function MainLayout({ children }) {
  return (
    <>
      <GlobalStyles />
      <Global styles={baseStyles} />
      <a id="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </>
  );
}
