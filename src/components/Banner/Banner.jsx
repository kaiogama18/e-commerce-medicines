// import OwlCarousel from "react-owl-carousel2";
import { Card, CardMedia, CardActionArea } from "@material-ui/core";
import styles from "./Banner.module.scss"
import data from '../../data/banner.json';
import Slider from "react-slick";



const settings = {
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 8000,
  dots: false,
  arrows: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true,
  adaptiveHeight: true,
  className: "center",
};

export default ({ bannes }) => {
  return (
    <Slider {...settings}>
      {data.map(banner => (
        <Card >
          <CardActionArea>
            <img src={banner.foto} className={styles.banner} />
          </CardActionArea>
        </Card >
      ))}
    </Slider>
  )
}