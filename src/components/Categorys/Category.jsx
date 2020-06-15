import { Breakpoint } from 'react-socks';
import data from '../../data/category.json';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';

function CarouselCategory(props) {
  return (
    <CarouselProvider
      naturalSlideWidth={100}
      naturalSlideHeight={120}
      totalSlides={6}
      visibleSlides={4}
    >
      <Slider>
        <div className="carousel-category">
          {props.category.map((aux, index) => {
            return (
              <Slide key={index}>
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
        {props.category.map((aux, index) => {
          return <button key={index}>{aux.name}</button>;
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
