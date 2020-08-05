import '../styles/styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';
import 'react-owl-carousel2/lib/styles.css';

import Head from 'next/head';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <html lang="pt-br" />
        <title>WEDO Market</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta name="author" content="Kaio B. Gama" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script src="https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js"></script>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"></script>
      </Head>
        <Component {...pageProps} />
    </>
  );
}
