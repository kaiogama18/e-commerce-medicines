import { Breakpoint } from 'react-socks';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import data from '../../data/category.json';
import { Container, AppBar, Tabs, Tab } from '@material-ui/core';
import stylesCat from "./Categories.module.scss"

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


const Categories = ({ categories }) => {

  const options = {
    center: true,
    items: 2,
    loop: true,
    margin: 10,
    responsive: {
      600: {
        items: 8
      }
    }
  };

  return (
    <div >
      <Breakpoint medium up>
        <AppBar position="static" color="default" className={stylesCat.categories}>
          <Container>
            <Tabs
              // value={value}
              // onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="scrollable"
              scrollButtons="auto"
              aria-label="scrollable auto tabs example"
            >
              {categories.map(category => (
                <Tab label={category.nome} className={stylesCat.text} />
              ))}
            </Tabs>
          </Container>
        </AppBar>
      </Breakpoint>

      <Breakpoint small down>
        <CarouselCategory category={data} />
      </Breakpoint>
    </div>
  );
};
export default Categories;
