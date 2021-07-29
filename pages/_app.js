import {ThemeProvider } from 'styled-components'
import theme from '../src/components/theme'
import { GlobalStyle } from '../src/components/theme/GlobalStyle'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title> Instalura - porjeto Base</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" /> 
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
