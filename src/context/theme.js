import React from 'react';

const ThemeContext = React.createContext();
const initialTheme = {
  mode: 'light',
};

function getStoredTheme() {
  if (typeof window !== 'undefined') {
    const theme = window.localStorage.getItem('theme');
    return theme ? JSON.parse(theme) : initialTheme;
  }
  return initialTheme;
}

function ThemeProvider(props) {
  const [theme, setTheme] = React.useState(() => getStoredTheme());

  React.useEffect(() => {
    window.localStorage.setItem('theme', JSON.stringify(theme));
  }, [theme]);

  const value = React.useMemo(() => [theme, setTheme], [theme]);
  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeContext, ThemeProvider };
