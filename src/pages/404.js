import React from 'react';
import tw from 'twin.macro';
import styled from '@emotion/styled';

import { Layout, SEO, ContentWrapper } from '../components/elements';

const StyledFiller = styled.div`
  ${tw`h-screen`};
`;

export default function notFoundPage() {
  return (
    <Layout>
      <SEO title="404: Not Found" />
      <ContentWrapper>
        <h1>Not Found!</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <StyledFiller />
      </ContentWrapper>
    </Layout>
  );
}
