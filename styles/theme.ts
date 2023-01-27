import { mediaQueries } from './media'

// Holds colors that remains constant on every mode
const colors = {
    gray1: '#ebedf0',
    textGray1: '#222',
}

export const lightTheme = {
    colors: {
        ...colors,
        dark: '#333',
        black: '#000000',
    },
    variables: {
        primary: '#d5d5d5',
        secondary: '#545b62',
        background: '#ffffff',
        bodyColor: '#666',
        titleColor: '#333',
        textMuted: '#aaa',
        light: '#ebedf0',
        slightlyTransparent: 'rgba(255, 255, 255, 0.3)',
        darkText: '#222',
        textColor: '#333',
        thetiary: '#9688ea',
        navIconBg: 'transparent',
        footerBg: '#ffffff',
        iconFillColor: '#333',
        codeBgBlack: '#303846',
        codeColor: '#d5d5d5',
        // Btn
        btnSecondaryBg: '#6c757d',
        btnSecoondaryHoverBg: '#6c757dc9',
        btnSecondaryColor: '#ffffff',
        borderColor: '#606770',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
    mediaQueries,
}

export const darkTheme = {
    colors: {
        ...colors,
        dark: '#ebedf0',
        black: '#000000',
    },
    variables: {
        primary: '#d5d5d5',
        secondary: '#535b61',
        background: '#18191a',
        bodyColor: '#d5d5d5',
        titleColor: '#f5f6f7',
        textMuted: '#aaa',
        light: '#444444',
        // TODO: get dark variant for the following
        slightlyTransparent: 'rgba(36, 37, 38, 0.78)',
        darkText: '#ffffff',
        textColor: '#EBEDF4',
        thetiary: '#9688ea',
        navIconBg: '#EFEFEF',
        footerBg: '#303846',
        iconFillColor: '#f5f6f7',
        codeBgBlack: '#303846',
        codeColor: '#d5d5d5',
        // Btn
        btnSecondaryBg: '#ebedf0',
        btnSecoondaryHoverBg: '#d4d5d8',
        btnSecondaryColor: '#1c1e21',
        borderColor: '#606770',
    },
    fonts: ['sans-serif', 'Roboto'],
    fontSizes: {
        small: '1em',
        medium: '2em',
        large: '3em',
    },
    mediaQueries,
}

export type ThemeType = typeof lightTheme
