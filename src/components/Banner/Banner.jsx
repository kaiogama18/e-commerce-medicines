import data from '../../data/banner.json';
import { Carousel } from 'react-responsive-carousel';

function ImgBanner(props) {
  return (
    <Carousel
      showArrows={true}
      dynamicHeight={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      emulateTouch={true}
      showIndicators={false}
    >
      {props.bannes.map(banner => { return <img src={banner.url_banner} draggable="false" /> })}
    </Carousel>
  );
}

const Banner = ({ bannes }) => { return <ImgBanner bannes={data} />; }

export default Banner;
