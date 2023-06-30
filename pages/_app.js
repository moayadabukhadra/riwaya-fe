import { GoogleOAuthProvider } from "@react-oauth/google";
import Layout from "./layouts/Layout";
import { useRouter } from "next/router";
import "assets/css/custom.scss";
import 'assets/css/custom.css';
import "/src/assets/css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "swiper/swiper.min.css";
import Guest from "./layouts/Guest";


function MyApp({ Component, pageProps }) {
    const router = useRouter();

    return (
        <GoogleOAuthProvider clientId={"568497747334-dt5ek21j3prthr149h5cirve4gtfeqcj.apps.googleusercontent.com"}>

            {
                    router.pathname.startsWith('/auth') && router.pathname !== '/authors'? (
                        <Guest>
                            <Component {...pageProps} />
                        </Guest>
                    ) : (
                        <Layout>
                            <Component {...pageProps} />
                        </Layout>
                    )
                }

        </GoogleOAuthProvider>
    );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
    let pageProps = {};
    if (Component.getInitialProps) {
        pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
};

export default MyApp;
