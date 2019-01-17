import React from 'react';
import { Global } from '@emotion/core';
import styled from '@emotion/styled';

import globalStyles from '../../styles/global';
import 'typeface-open-sans';

import Header from './header';
import Footer from './footer';

const Wrapper = styled.div`
  ${tw`font-sans font-black`};
`;

export default function Layout({ children }) {
  return (
    <>
      <Global styles={globalStyles} />
      <Wrapper>
        <Header />
        {children}
        <Footer />
      </Wrapper>
    </>
  );
}
