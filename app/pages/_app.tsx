import { AppProps } from 'next/app';
import Head from "next/head";  

import personalInfo from '../portfolioData/personalInfo.json';

const App = ({ Component, pageProps }: AppProps) => {  
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
};

export default App;
