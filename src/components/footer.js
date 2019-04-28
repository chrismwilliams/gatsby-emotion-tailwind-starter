import React from 'react';
import styled from '@emotion/styled';
import useTheme from './hooks/useTheme';

const StyledFooter = styled.footer`
  ${tw`p-8 flex flex-col justify-center items-center bg-teal-dark text-white`};
  &.dark {
    ${tw`bg-indigo-darkest`};
  }
  a {
    ${tw`p-1 inline-block border-0 border-b border-dotted text-center text-sm sm:text-base font-semibold`}
  }
  p {
    ${tw`mt-4 text-sm text-grey-lighter font-bold`};
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
      <p>Created by Chris Williams</p>
    </StyledFooter>
  );
}
