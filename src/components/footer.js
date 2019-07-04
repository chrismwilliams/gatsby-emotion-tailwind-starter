import React from 'react';
import styled from '@emotion/styled';

const StyledFooter = styled.footer`
  ${tw`p-8 flex flex-col justify-center items-center text-white`};
  background-color: var(--footerColor);
  a {
    ${tw`p-1 inline-block border-0 border-b border-dotted text-center text-sm sm:text-base font-semibold`}
  }
  p {
    ${tw`mt-4 text-sm text-grey-lighter font-bold`};
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
      <p>Created by Chris Williams</p>
    </StyledFooter>
  );
}
