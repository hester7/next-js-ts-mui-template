import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider as PreferredThemeProvider } from "next-themes";
import Head from "next/head";
import createEmotionCache from "../../theme/createEmotionCache";
import { MuiThemeProvider } from "./MuiThemeProvider";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

type PageProviderProps = {
    emotionCache?: EmotionCache;
    children: React.ReactNode;
    title?: string;
    description?: string;
};

export const PageProvider = (props: PageProviderProps) => {
    const { children, emotionCache = clientSideEmotionCache, title, description } = props;

    return (
        <PreferredThemeProvider>
            <CacheProvider value={emotionCache}>
                <Head>
                    <meta httpEquiv="Content-type" content="text/html; charset=utf-8" />
                    <meta name="description" content={description} />
                    <meta name="viewport" content="initial-scale=1, width=device-width" />
                    <title>{title}</title>

                    {/* <!-- Favicons --> */}
                    <link key="favicon:1" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                    <link key="favicon:2" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                    <link key="favicon:3" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                    <link key="favicon:4" rel="icon" href="/favicon.ico" />
                    <link key="manifest" rel="manifest" href="/site.webmanifest" />
                </Head>
                <MuiThemeProvider>{children}</MuiThemeProvider>
            </CacheProvider>
        </PreferredThemeProvider>
    );
};
