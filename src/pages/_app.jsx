import '../styles/styles.scss';
import '../styles/mobile_styles.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import 'pure-react-carousel/dist/react-carousel.es.css';

export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
