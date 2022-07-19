import { mediaQueries } from "./media";

export const lightTheme = {
  colors: {
    dark: "#333",
  },
  variables: {
    primary: "#d5d5d5",
    secondary: "#545b62",
    background: "#ffffff",
    bodyColor: "#666",
    titleColor: "#333",
    textMuted: "#aaa",
    light: "#ffffff"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  mediaQueries
};

export const darkTheme = {
  colors: {
    dark: "#333",
  },
  variables: {
    primary: "#d5d5d5",
    secondary: "#535b61",
    background: "#222222",
    bodyColor: "#d5d5d5",
    titleColor: "#333",
    textMuted: "#aaa",
    light: "#444444"
  },
  fonts: ["sans-serif", "Roboto"],
  fontSizes: {
    small: "1em",
    medium: "2em",
    large: "3em",
  },
  mediaQueries
};

export type ThemeType = typeof lightTheme;
