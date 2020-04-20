import data from '../data/banner.json';
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
      {props.img.map((aux, index) => {
        return (
          <img src={aux.src} alt={aux.name} key={index} draggable="false" />
        );
      })}
    </Carousel>
  );
}

class Banner extends React.Component {
  render() {
    return <ImgBanner img={data} />;
  }
}

export default Banner;
