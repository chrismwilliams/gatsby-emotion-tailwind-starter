import React from 'react';
import tw from 'twin.macro';

const StyledWrapper = tw.div`min-h-screen font-normal`;

export default function PageWrapper({ children }) {
  return <StyledWrapper>{children}</StyledWrapper>;
}
