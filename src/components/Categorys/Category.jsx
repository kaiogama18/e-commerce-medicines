import { Breakpoint } from 'react-socks';
import OwlCarousel from 'react-owl-carousel2';
import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import data from '../../data/category.json';
import { Box, Container, Button, AppBar, Tabs, Tab } from '@material-ui/core';
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


const Category = ({ categorys }) => {

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
    <>
      <Breakpoint medium up>
        <AppBar position="static" color="default">
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
              {categorys.map(category => (
                <Tab label={category.nome} />
              ))}
            </Tabs>
          </Container>
        </AppBar>
      </Breakpoint>

      <Breakpoint small down>
        <CarouselCategory category={data} />
      </Breakpoint>
    </>
  );
};
export default Category;
