import { FC, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./GlobalStyle";

interface MainThemeProviderPropos {
    children: ReactNode,
    theme: DTO.ThemeState
}

const MainThemeProvider: FC<MainThemeProviderPropos> = ({ children, theme }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default MainThemeProvider;
