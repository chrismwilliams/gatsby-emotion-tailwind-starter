import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  ${tw`p-8 flex justify-center items-center text-black`};
`;

export default function footer() {
  return (
    <StyledFooter>
      Chris Williams {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  );
}
