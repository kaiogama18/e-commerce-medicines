import Head from 'next/head';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import Footer from './footer';
import { BreakpointProvider } from 'react-socks';

const Layout = ({ children }) => (
  <>
    <Head>
      <title>WEDO Market</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
      />
      <meta name="author" content="Kaio B. Gama" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.4.0/Chart.min.js"></script>
      <script type="text/javascript" src="jscript/graph.js"></script>
      {/* <link rel="stylesheet" href="/path/to/flickity.css" media="screen" /> */}
      <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.9.3/Chart.js"></script>

      <script src="https://unpkg.com/material-components-web@v4.0.0/dist/material-components-web.min.js"></script>
    </Head>
    <main>
      <BreakpointProvider>
        <Navbar />
        {children}
        <Footer />
        {/* <script src="/path/to/flickity.pkgd.min.js" /> */}
      </BreakpointProvider>
    </main>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
