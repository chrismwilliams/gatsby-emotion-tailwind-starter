import * as React from 'react';
import { ThemeContext } from '../context/theme';

const useTheme = () => {
  const { theme, setTheme } = React.useContext(ThemeContext);

  const isDark = React.useMemo(() => theme === 'dark', [theme]);

  function ToggleTheme() {
    setTheme(isDark ? 'light' : 'dark');
  }

  return { theme, setTheme, isDark, ToggleTheme };
};

export default useTheme;
