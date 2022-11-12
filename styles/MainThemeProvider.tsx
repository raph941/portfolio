import { FC, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './GlobalStyle'
import { ThemeType } from './theme'

interface MainThemeProviderPropos {
    children: ReactNode
    theme: ThemeType
}

const MainThemeProvider: FC<MainThemeProviderPropos> = ({ children, theme }) => {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <GlobalStyle />
        </ThemeProvider>
    )
}

export default MainThemeProvider
