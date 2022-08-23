import { useEffect, useState } from "react";
import { darkTheme, lightTheme, ThemeType } from "../styles/theme";

type ThemeModes = "light" | "dark";

export interface ThemeModeResType {
  themeMode: ThemeModes;
  toggleThemeMode: () => void;
  theme: ThemeType;
}

/**
 * Handles setting and getting theme state
 * @returns themeMode, toggleThemeMode, theme
 */
const useThemeMode = (): ThemeModeResType => {
  const [themeMode, setThemeMode] = useState<ThemeModes>("light");

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    savedTheme && setThemeMode(savedTheme as ThemeModes);
  }, []);

  const setMode = (mode: ThemeModes) => {
    window.localStorage.setItem("theme", mode);
    setThemeMode(mode);
  };

  const toggleThemeMode = () => {
    themeMode === "light" ? setMode("dark") : setMode("light");
  };

  return {
    themeMode,
    toggleThemeMode,
    theme: themeMode === "light" ? lightTheme : darkTheme,
  };
};

export { useThemeMode };
