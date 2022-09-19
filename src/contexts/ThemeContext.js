import React, { createContext, useState } from "react";

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
  const [theme, setTheme] = useState({
    isLight: false,
    light: { font: "#333", bg: "#ddd", ui: "#eee" },
    dark: { font: "#ddd", bg: "#333", ui: "#555" },
  });

  const themeToggle = (e) => {
    e.preventDefault();
    setTheme({ ...theme, isLight: !theme.isLight });
  };
  return (
    <ThemeContext.Provider value={{ ...theme, themeToggle }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;
