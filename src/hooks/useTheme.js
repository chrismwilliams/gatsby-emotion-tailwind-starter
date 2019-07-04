import React from 'react';

import { ThemeContext } from '../context/theme';

function useTheme() {
  const context = React.useContext(ThemeContext);
  return context;
}

function handleToggle(e, setTheme) {
  const themeMode = e.target.checked ? 'dark' : 'light';
  setTheme(themeMode);
}

export { useTheme, handleToggle };
