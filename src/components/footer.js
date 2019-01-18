import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  ${tw`p-8 flex justify-center items-center bg-purple-darker text-white`};

  a {
    ${tw`inline-block p-2 border-0 border-b border-dotted`}
  }
`;

export default function footer() {
  return (
    <StyledFooter>
      <a
        href="https://github.com/chrismwilliams/gatsby-emotion-tailwind-starter"
        rel="nofollow noopener noreferrer"
        target="_blank"
        aria-label="github"
      >
        Gatsby Emotion Tailwind Starter
      </a>
    </StyledFooter>
  );
}
