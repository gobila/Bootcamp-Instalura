import React from 'react';
import Head from 'next/head';
import '../src/assets/css/instagram.css';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* <title> Instalura - porjeto Base</title> */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" />
        {/* <link rel="stylesheet" href='../src/assets/css/instagram.css'/> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}
