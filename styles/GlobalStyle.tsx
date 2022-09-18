import { createGlobalStyle } from "styled-components";
import { ThemeType } from "./theme";

const GlobalStyle = createGlobalStyle<{ theme: ThemeType }>`

    body {
        background: ${({ theme }) => theme.variables.background};
    }

    .text-muted {
        color: ${({ theme }) => theme.variables.textMuted} !important;
    }

    .page-content {
        max-width: 1280px;
        margin: 0 auto;
    }

    .btn {
        border-radius: 1.875rem;
        font-size: 0.875rem;
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
`;

export { GlobalStyle };
