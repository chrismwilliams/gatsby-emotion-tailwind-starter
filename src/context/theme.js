import React from 'react';

const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = React.useState(null);

  React.useEffect(() => {
    setTheme(document.body.className);
  }, []);

  React.useEffect(() => {
    if (theme) {
      window.localStorage.setItem('theme', theme);
      document.body.className = theme;
    }
  }, [theme]);

  const value = React.useMemo(() => [theme, setTheme], [theme]);
  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeContext, ThemeProvider };
