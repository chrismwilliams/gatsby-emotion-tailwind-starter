import React from 'react';
import styled from '@emotion/styled';
import useTheme from './hooks/useTheme';

const StyledFooter = styled.footer`
  ${tw`p-8 flex justify-center items-center bg-teal-dark text-white`};
  &.dark {
    ${tw`bg-indigo-darkest`};
  }
  a {
    ${tw`inline-block p-2 border-0 border-b border-dotted text-center text-sm sm:text-base font-semibold`}
  }
`;

export default function footer() {
  const { getThemeMode } = useTheme();
  return (
    <StyledFooter className={getThemeMode}>
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
