import { Breakpoint } from 'react-socks';
import { Container, Typography } from '@material-ui/core';
import styles from "./Categories.module.scss"
import Slider from "react-slick";

const settings = {
  className: "slider variable-width",
  dots: false,
  infinite: true,
  centerMode: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  variableWidth: true
};

const Categories = ({ categories }) => {
  return (
    <Breakpoint medium up>
      <Breakpoint className={styles.catlist} medium up>
        <Container className="py-4 px-8">
          <Slider {...settings}>
            {categories.map(category => (
              <div className="flex text-center mx-8">
                <Typography variant="subtitle1" >
                  {category.nome}
                </Typography>
              </div>
            ))}
          </Slider>
        </Container>
      </Breakpoint>
    </Breakpoint>
  );
};
export default Categories;

