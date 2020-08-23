import OwlCarousel from "react-owl-carousel2";
import styles from "./Banner.module.scss"

import data from '../../data/banner.json';
const options = {
  center: true,
  loop: true,
  autoplay: true,
  autoplayTimeout: 3000,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
};

export default ({ bannes }) => {
  // console.log('[Plot] ==> ' + JSON.stringify(bannes, null, 2));
  return (

    // <OwlCarousel options={options} >
    //   {data.map(banner => <img src={banner.url_banner} className={styles.banner} />)}
    // </OwlCarousel>

    <OwlCarousel options={options} >
      {bannes.map(banner => <img src={banner.foto} className={styles.banner} />)}
    </OwlCarousel>
  )
}
