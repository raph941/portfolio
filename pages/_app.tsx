import type { AppProps } from "next/app";

import "antd/dist/antd.css"

import "bootstrap/dist/css/bootstrap.min.css";


import { useThemeMode } from "../hooks/useThemeMode";
import MainThemeProvider from "../styles/MainThemeProvider";
import { userData } from "../data/userData";
import { GlobalStyle } from "../styles/GlobalStyle";
import { Footer, StyledPageContentWrapper, NavBar, SectionDivider } from "../components";

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useThemeMode();

  return (
    <MainThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar userData={userData} />

      <StyledPageContentWrapper>
        <Component {...pageProps} userData={userData} />
      </StyledPageContentWrapper>

      <Footer data={userData?.footer} />
    </MainThemeProvider>
  );
}

export default MyApp;
