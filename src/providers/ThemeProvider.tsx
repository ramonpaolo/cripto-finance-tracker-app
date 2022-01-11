import React, { createContext, useContext, useState } from "react";

export type Theme = "dark" | "light";

export const ThemeContext = createContext({});

export const ThemeProvider = (props: any) => {
  const [theme, setTheme] = useState<Theme>("dark");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
