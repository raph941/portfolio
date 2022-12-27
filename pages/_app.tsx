import { ApolloProvider } from '@apollo/client'
import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import { useEffect } from 'react'
import ReactGA from 'react-ga'
import 'antd/dist/antd.css'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-loading-skeleton/dist/skeleton.css'

import { Footer, StyledPageContentWrapper, NavBar } from '../components'
import { userData } from '../data/userData'
import client from '../lib/apollo-client'
import { useThemeMode } from '../lib/hooks/useThemeMode'
import MainThemeProvider from '../styles/MainThemeProvider'

ReactGA.initialize(process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_UA ?? '')

const MyApp = ({ Component, pageProps }: AppProps) => {
    const { theme, toggleThemeMode, isLightMode } = useThemeMode()

    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search)
    }, [])

    return (
        <ApolloProvider client={client}>
            <MainThemeProvider theme={theme}>
                <NavBar userData={userData} toggleThemeMode={toggleThemeMode} />

                <StyledPageContentWrapper>
                    <AnimatePresence exitBeforeEnter onExitComplete={() => window.scrollTo(0, 0)}>
                        <Component {...pageProps} userData={userData} />
                    </AnimatePresence>
                </StyledPageContentWrapper>

                <Footer data={userData?.footer} />
            </MainThemeProvider>
        </ApolloProvider>
    )
}

export default MyApp
