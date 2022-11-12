import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import "antd/dist/antd.css";

import client from "../lib/apollo-client";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-loading-skeleton/dist/skeleton.css";

import { useThemeMode } from "../lib/hooks/useThemeMode";
import MainThemeProvider from "../styles/MainThemeProvider";
import { userData } from "../data/userData";
import { Footer, StyledPageContentWrapper, NavBar } from "../components";
import { AnimatePresence } from "framer-motion";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { theme, toggleThemeMode, isLightMode } = useThemeMode();

  return (
    <ApolloProvider client={client}>
      <MainThemeProvider theme={theme}>
        <NavBar
          userData={userData}
          toggleThemeMode={toggleThemeMode}
        />

        <StyledPageContentWrapper>
          <AnimatePresence
            exitBeforeEnter
            onExitComplete={() => window.scrollTo(0, 0)}
          >
            <Component {...pageProps} userData={userData} />
          </AnimatePresence>
        </StyledPageContentWrapper>

        <Footer data={userData?.footer} />
      </MainThemeProvider>
    </ApolloProvider>
  );
};

export default MyApp;
