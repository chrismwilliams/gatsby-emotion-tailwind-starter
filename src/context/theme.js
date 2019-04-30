import React, { useEffect } from 'react';

const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const initialThemeSetting = () => {
    const defaultTheme = { mode: 'light' };
    if (typeof window !== 'undefined') {
      return JSON.parse(window.localStorage.getItem('theme')) || defaultTheme;
    }
    return defaultTheme;
  };
  const [theme, setTheme] = React.useState(initialThemeSetting);

  useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const value = React.useMemo(() => [theme, setTheme], [theme]);
  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeContext, ThemeProvider };
