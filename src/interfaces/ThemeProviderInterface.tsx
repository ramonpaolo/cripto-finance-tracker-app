// ---- Interfaces
import { Theme } from "./ThemeType";

export default interface IThemeProvider {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
}
