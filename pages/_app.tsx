import { EmotionCache } from "@emotion/react";
import { AppProps } from "next/app";
import { Layout } from "../components/core/Layout";
import { PageProvider } from "../components/theme/PageProvider";

interface MyAppProps extends AppProps {
    emotionCache?: EmotionCache;
}

export default function MyApp({ Component, pageProps, emotionCache }: MyAppProps) {
    return (
        <PageProvider emotionCache={emotionCache}>
            <Layout logoText="TODO">
                <Component {...pageProps} />
            </Layout>
        </PageProvider>
    );
}
