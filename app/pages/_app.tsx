import React from 'react';
import 'codethings-react-ui/dist/styles.css';

import { AppProps } from 'next/app';
import Head from "next/head";  

import personalInfo from '../portfolioData/personalInfo.json';

function App ({ Component, pageProps }: AppProps): JSX.Element {  
  return (
    <>
      <Head>
        <title>{personalInfo.name}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lato:400,700" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default App;
