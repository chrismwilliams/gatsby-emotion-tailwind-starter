import React from 'react';

const ThemeContext = React.createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = React.useState({ mode: 'white' });
  const value = React.useMemo(() => [theme, setTheme], [theme]);
  return <ThemeContext.Provider value={value} {...props} />;
}

export { ThemeContext, ThemeProvider };
