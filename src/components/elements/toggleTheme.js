import React from 'react';
import styled from '@emotion/styled';

import { useTheme, handleToggle } from '../../hooks/useTheme';

const StyledToggle = styled.div`
  ${tw`ml-4 px-6 flex items-center`};
  min-width: 6rem;
  input {
    ${tw`absolute`};
    left: -99999px;
    &:checked + label {
      ${tw`bg-purple`}
      &::after {
        transform: translateX(28px);
      }
    }
  }
  label {
    ${tw`relative inline-block w-12 h-5 bg-grey-dark`};
    border-radius: 20px;
    transition: background-color 0.25s ease-in-out;

    &::after {
      ${tw`absolute bg-white rounded-full`};
      content: '';
      width: 18px;
      height: 18px;
      top: 1px;
      left: 1px;
      transition: transform 0.25s ease-in-out;
    }
  }
`;

export default function toggleTheme() {
  const [theme, setTheme] = useTheme();

  if (!theme) return <StyledToggle />;

  return (
    <StyledToggle>
      <input
        type="checkbox"
        id="toggle"
        aria-label="Switch between Dark and Light mode"
        checked={theme === 'dark'}
        onChange={e => handleToggle(e, setTheme)}
      />
      <label htmlFor="toggle" />
    </StyledToggle>
  );
}
