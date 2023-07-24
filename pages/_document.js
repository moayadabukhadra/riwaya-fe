import Document, { Head, Html, Main, NextScript } from 'next/document'
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
                    <Script
                        id="Adsense-id"
                        data-ad-client="ca-pub-2029155588392824"
                        async="true"
                        strategy="beforeInteractive"
                        onError={(e) => { console.error('Script failed to load', e) }}
                        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" />
                    <link rel="icon" href="/images/logo/riwaya-logo.png" />
                    <Script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js" />
                </Head>
                <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-M5QT6Y6YRH"></Script>
                <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
                        gtag('config', 'G-M5QT6Y6YRH', {
                            page_path: window.location.pathname,       
                        });
                        `,
                }} />
                <body>
                    <Main>
                        
                    </Main>
                    <NextScript/>
                    <Script
                        id="Adsense-id"
                        data-ad-client="ca-pub-2029155588392824"
                        async="true"
                        strategy="beforeInteractive"
                        onError={(e) => { console.error('Script failed to load', e) }}
                        src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"/>
                </body>
            </Html>
        )
    }
}

export default MyDocument