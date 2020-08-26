import { Breakpoint } from 'react-socks';
import { Container, Typography } from '@material-ui/core';
import styles from "./Categories.module.scss"
import Slider from "react-slick";
import data from '../../data/category.json';

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
    <>
      <Breakpoint className={styles.categories} medium up>
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
      {/* <Breakpoint small down>
        <CarouselCategory category={data} />
      </Breakpoint> */}
    </>
  );
};
export default Categories;

// // Old para remover
// import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

// function CarouselCategory(props) {
//   return (
//     <CarouselProvider
//       naturalSlideWidth={100}
//       naturalSlideHeight={120}
//       totalSlides={6}
//       visibleSlides={4}
//     >
//       <Slider>
//         <div className="carousel-category">
//           {props.category.map((aux, index) => {
//             return (
//               <Slide key={index}>
//                 <button>
//                   <div className="btn-c">
//                     <img src={aux.src} alt={aux.name} />
//                     <p>{aux.name}</p>
//                   </div>
//                 </button>
//               </Slide>
//             );
//           })}
//         </div>
//       </Slider>
//     </CarouselProvider>
//   );
// }

