import type { AppProps } from "next/app";
import React from "react";
import "antd/dist/antd.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { useThemeMode } from "../hooks/useThemeMode";
import MainThemeProvider from "../styles/MainThemeProvider";
import { userData } from "../utils/data";
import { GlobalStyle } from "../styles/GlobalStyle";
import {
  Footer,
  StyledPageContentWrapper,
  NavBar,
  SectionDivider,
} from "../components";
import { NextComponentType, NextPageContext } from "next";

export const GlobalContext = React.createContext({});

function MyApp({ Component, pageProps }: AppProps) {
  const { theme } = useThemeMode();

  return (
    <MainThemeProvider theme={theme}>
      <GlobalStyle />
      <NavBar userData={userData} />

      <GlobalContext.Provider value={global}>
        <StyledPageContentWrapper>
          <Component {...pageProps} userData={userData} />
        </StyledPageContentWrapper>
      </GlobalContext.Provider>

      <Footer data={userData?.footer} />
    </MainThemeProvider>
  );
}

MyApp.getInitialProps = async (ctx: NextPageContext) => {
  // Portfolio meta data
  let userMeta = {};

  return {
    pageProps: {
      userMeta: userMeta
    },
  };
};

export default MyApp;
