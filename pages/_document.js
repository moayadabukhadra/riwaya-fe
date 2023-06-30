import Document, {Head, Html, Main, NextScript} from 'next/document'
import Script from "next/script";

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const originalRenderPage = ctx.renderPage
        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: (App) => App,
                enhanceComponent: (Component) => Component,
            })

        return await Document.getInitialProps(ctx)
    }

    render() {
        return (
            <Html lang={"ar"} dir={"rtl"}>
                <Head>
                    <link rel="icon" href="/images/logo/riwaya-logo.png"/>
                    <script async
                            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2029155588392824"
                            crossOrigin="anonymous"></script>
                </Head>
                <body>
                <Main />
                <NextScript />
                <Script
                    id="Adsense-id"
                    data-ad-client="ca-pub-2029155588392824"
                    async="true"
                    strategy="beforeInteractive"
                    onError={ (e) => { console.error('Script failed to load', e) }}
                     src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></Script>
                </body>
            </Html>
        )
    }
}

export default MyDocument