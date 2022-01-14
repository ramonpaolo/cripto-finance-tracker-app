import React, {
    createContext,
    ReactElement,
    useContext,
    useEffect,
    useState,
} from "react";
import { JsxElement } from "typescript";

// ---- Interfaces
import IThemeProvider from "../interfaces/ThemeProviderInterface";
import { Theme } from "../interfaces/ThemeType";

const DEFAULT_VALUE: IThemeProvider = {
    setTheme: () => {
        return;
    },
    theme: "dark",
};

export const ThemeContext = createContext<IThemeProvider>(DEFAULT_VALUE);

export const ThemeProvider = ({
    children,
}: {
    children: ReactElement | JsxElement;
}): ReactElement => {
    const [theme, setTheme] = useState<Theme>(DEFAULT_VALUE.theme);

    useEffect(() => {
        const theme = localStorage.getItem("theme");
        if (theme !== null) setTheme(theme as Theme);
    }, []);

    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
