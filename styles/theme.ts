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
    light: "#ffffff",
    slightlyTransparent: "#ffffff89",
    darkText: "#222",
    textColor: "",
    thetiary: "#9688ea",
    navIconBg: 'transparent'
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
    background: "#161616",
    bodyColor: "#d5d5d5",
    titleColor: "#333",
    textMuted: "#aaa",
    light: "#444444",
    // TODO: get dark variant for the following
    slightlyTransparent: "#1e1e20",
    darkText: "#222",
    textColor: "#EBEDF4",
    thetiary: "#9688ea",
    navIconBg: '#EFEFEF'
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
