import { ApolloProvider } from '@apollo/client'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import 'antd/dist/antd.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { Footer, StyledPageContentWrapper, NavBar } from '../components'
import { userData } from '../data/userData'
import client from '../lib/apollo-client'
import { useGoogleAnalytics } from '../lib/hooks/useGoogleAnalytics'
import { useThemeMode } from '../lib/hooks/useThemeMode'
import MainThemeProvider from '../styles/MainThemeProvider'

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { theme, toggleThemeMode, isLightMode } = useThemeMode()
    const { trackEvent } = useGoogleAnalytics()

    return (
        <ApolloProvider client={client}>
            <MainThemeProvider theme={theme}>
                <NavBar userData={userData} toggleThemeMode={toggleThemeMode} />

                <StyledPageContentWrapper>
                    <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
                        <Component {...pageProps} userData={userData} trackEvent={trackEvent} />
                    </AnimatePresence>
                </StyledPageContentWrapper>

                <Footer data={userData?.footer} />
            </MainThemeProvider>
        </ApolloProvider>
    )
}

export default MyApp
