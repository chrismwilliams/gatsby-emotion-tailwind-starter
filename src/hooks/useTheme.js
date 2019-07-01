import React from 'react';

import { ThemeContext } from '../context/theme';

function useTheme() {
  const context = React.useContext(ThemeContext);
  return context;
}

function useThemeMode() {
  const [{ mode }] = useTheme();
  return React.useMemo(() => mode, [mode]);
}

function useThemeModifier() {
  const [, setTheme] = useTheme();

  return changes =>
    setTheme(prevState => {
      return { ...prevState, ...changes };
    });
}

export { useTheme, useThemeMode, useThemeModifier };
