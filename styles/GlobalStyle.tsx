import { createGlobalStyle } from 'styled-components'

import { ThemeType } from './theme'

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`

    body {
        background: ${({ theme }) => theme.variables.background} !important;
    }

    .text-muted {
        color: ${({ theme }) => theme.variables.textMuted} !important;
    }

    .page-content {
        max-width: 1280px;
        margin: 0 auto;
    }

    .flex-next-img-wrap {
        width: 100%;
    }
    
    .flex-next-img {
        width: 100% !important;
        position: relative !important;
        height: unset !important;
    }

    .flex-next-img-wrap span {
        padding-top: 0 !important;
        width: -webkit-fill-available;
    }

    svg {
        fill: ${({ theme }) => theme.variables.iconFillColor};
    }

    /* Button */
    .btn {
        border-radius: 0.375rem;
        font-size: 0.875rem;
        font-weight: 600;
    }

    .btn-secondary {
        background-color: ${({ theme }) => theme.variables.btnSecondaryBg} !important;
        color: ${({ theme }) => theme.variables.btnSecondaryColor} !important;

        &:hover {
            background-color: ${({ theme }) => theme.variables.btnSecoondaryHoverBg} !important;
        }
    }

    .btn-outline-secondary {
        border-color: ${({ theme }) => theme.variables.btnSecondaryBg} !important;
        color: ${({ theme }) => theme.variables.btnSecondaryBg} !important;

        &:hover {
            background-color: ${({ theme }) => theme.variables.btnSecoondaryHoverBg} !important;
            color: ${({ theme }) => theme.variables.btnSecondaryColor} !important;
        }
    }

    // Typography
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${({ theme }) => theme.variables.titleColor} !important;
    }

    .body-text {
        color: ${({ theme }) => theme.variables.bodyColor} !important;
    }
`

export { GlobalStyle }
