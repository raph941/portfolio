import Document, {
    DocumentContext,
    DocumentInitialProps,
    Head,
    Html,
    Main,
    NextScript,
} from 'next/document'
import Script from 'next/script'
import { ServerStyleSheet } from 'styled-components'

import { userData } from '../data/userData'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <link rel="icon" type="image/png" sizes="32x32" href={userData.meta.favicon} />
                    <link rel="icon" type="image/png" sizes="16x16" href={userData.meta.favicon} />

                    {/* Google Tag Manager */}
                    {/* Google recommends this in the head, but Next.js recommends afterInteractive */}
                    <Script id="script-gtm" data-cookieconsent="ignore" strategy="afterInteractive">
                        {`
                            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                            })(window,document,'script','dataLayer','GTM-NM2JWBR6'); 
                        `}
                    </Script>
                </Head>
                <body>
                    {/* <!-- Google Tag Manager (noscript) --> */}
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-NM2JWBR6"
                            height="0"
                            width="0"
                            style={{ display: 'none', visibility: 'hidden' }}
                        ></iframe>
                    </noscript>
                    {/* <!-- End Google Tag Manager (noscript) --> */}

                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
