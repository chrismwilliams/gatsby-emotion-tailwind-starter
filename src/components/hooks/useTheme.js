import React from 'react';

import { ThemeContext } from '../context/theme';

export default function useTheme() {
  const [theme, setTheme] = React.useContext(ThemeContext);

  const getThemeMode = React.useMemo(() => {
    return theme.mode;
  }, [theme.mode]);

  const setThemeMode = mode => {
    setTheme(prevState => {
      return {
        ...prevState,
        mode,
      };
    });
  };

  const setThemeToLight = () => {
    setThemeMode('light');
  };

  const setThemeToDark = () => {
    setThemeMode('dark');
  };

  return {
    theme,
    getThemeMode,
    setThemeMode,
    setThemeToLight,
    setThemeToDark,
  };
}
