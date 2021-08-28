import React from 'react';
import { ThemeProvider } from 'styled-components';
import Head from 'next/head';
import theme from '../src/components/theme';
import { GlobalStyle } from '../src/components/theme/GlobalStyle';
import SEO from '../src/components/common/SEO';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <title> Instalura - porjeto Base</title> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
      </Head>
      <SEO headTitle="Home" />

      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
