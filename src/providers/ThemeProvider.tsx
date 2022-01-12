import React, { createContext, useContext, useEffect, useState } from "react";

export type Theme = "dark" | "light";

export const ThemeContext = createContext({});

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let theme = localStorage.getItem("theme");
    if (theme !== null) setTheme(theme as Theme);
    console.log(theme)
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
