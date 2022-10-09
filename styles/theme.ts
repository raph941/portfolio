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
    light: "#ebedf0",
    slightlyTransparent: "#ffffff89",
    darkText: "#222",
    textColor: "#333",
    thetiary: "#9688ea",
    navIconBg: 'transparent',
    footerBg: "#ffffff",
    iconFillColor: "",
    // Btn
    btnSecondaryBg: "",
    btnSecoondaryHoverBg: "",
    btnSecondaryColor: "",
    borderColor: "#606770",
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
    dark: "#ebedf0",
  },
  variables: {
    primary: "#d5d5d5",
    secondary: "#535b61",
    background: "#18191a",
    bodyColor: "#d5d5d5",
    titleColor: "#f5f6f7",
    textMuted: "#aaa",
    light: "#444444",
    // TODO: get dark variant for the following
    slightlyTransparent: "#242526",
    darkText: "#222",
    textColor: "#EBEDF4",
    thetiary: "#9688ea",
    navIconBg: '#EFEFEF',
    footerBg: "#303846",
    iconFillColor: "#f5f6f7",
    // Btn
    btnSecondaryBg: "#ebedf0",
    btnSecoondaryHoverBg: "#d4d5d8",
    btnSecondaryColor: "#1c1e21",
    borderColor: "#606770"
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
