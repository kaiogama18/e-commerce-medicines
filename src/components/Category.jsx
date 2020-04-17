import { Breakpoint } from 'react-socks';
import data from '../data/category.json';
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from 'pure-react-carousel';

function CarouselCategory(props) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={40}
      totalSlides={2}
    >
      <Slider>
        <div className="carousel-category">
          {props.category.map((aux, index) => {
            return (
              <Slide index={index}>
                <button>
                  <div className="btn-c">
                    <img src={aux.src} alt={aux.name} />
                    <p>{aux.name}</p>
                  </div>
                </button>
              </Slide>
            );
          })}
        </div>
      </Slider>
    </CarouselProvider>
  );
}

function Categorys(props) {
  return (
    <div className="category">
      <div>
        {props.category.map((aux) => {
          return <button key={aux.id}>{aux.name}</button>;
        })}
      </div>
    </div>
  );
}

const Category = () => {
  return (
    <>
      <Breakpoint medium up>
        <Categorys category={data} />
      </Breakpoint>

      <Breakpoint small down>
        <CarouselCategory category={data} />
      </Breakpoint>
    </>
  );
};
export default Category;
