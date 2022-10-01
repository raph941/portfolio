import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";

import client from "../lib/apollo-client";
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-loading-skeleton/dist/skeleton.css'

import { useThemeMode } from "../hooks/useThemeMode";
import MainThemeProvider from "../styles/MainThemeProvider";
import { userData } from "../data/userData";
import { GlobalStyle } from "../styles/GlobalStyle";
import {
  Footer,
  StyledPageContentWrapper,
  NavBar,
  SectionDivider,
} from "../components";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { theme } = useThemeMode();

  return (
    <ApolloProvider client={client}>
      <MainThemeProvider theme={theme}>
        <GlobalStyle />
        <NavBar userData={userData} />

        <StyledPageContentWrapper>
          <Component {...pageProps} userData={userData} />
        </StyledPageContentWrapper>

        <Footer data={userData?.footer} />
      </MainThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
