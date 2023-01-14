//import "../styles/globals.css";

import { ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { initTheme, createEmotionCache } from "share-module-federation-tutorial";
import { nextFont } from "../nextFont"

//Init MUI theme with nextjs Font
//Note: if you try to move the next/font into the share package @nextjs will have issue compiling the font

const theme = initTheme(nextFont);
const clientSideEmotionCache = createEmotionCache();

function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default MyApp;
