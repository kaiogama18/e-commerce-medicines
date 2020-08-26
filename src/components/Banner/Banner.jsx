// import OwlCarousel from "react-owl-carousel2";
import { Card, CardActionArea } from "@material-ui/core";
import styles from "./Banner.module.scss"
import data from '../../data/banner.json';
import Slider from "react-slick";

export default ({ bannes }) => {
  return (
    <Slider {...settings}>
      {data.map(banner => (
        <Card className="mt-1">
          <CardActionArea>
            <img src={banner.foto} className={styles.banner} />
          </CardActionArea>
        </Card >
      ))}
    </Slider>
  )
}

const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 2000,
  autoplaySpeed: 8000,
  slidesToShow: 1,
  slidesToScroll: 1,
  initialSlide: 0,
  centerMode: true,
  variableWidth: true,
  adaptiveHeight: true,
  className: "center",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        adaptiveHeight: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        variableWidth: false,
        adaptiveHeight: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: false,
        adaptiveHeight: true,
      }
    }
  ]
};