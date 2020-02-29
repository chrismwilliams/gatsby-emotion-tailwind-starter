import React from 'react';

import StyledFooter from './styled/footer';

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
