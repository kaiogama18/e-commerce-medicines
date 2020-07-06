import OwlCarousel from "react-owl-carousel2";
import { Container, Grid } from "@material-ui/core";
import { Adverts, Product } from "..";
import data from '../../data/card.json';
const Title = 'para você';
const Alert = 'Cuidados diários';

const options = {
  center: true,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 3
    },
    1000: {
      items: 5
    }
  }
};

export default ({ promotions }) => {
  return (
    <>
      <div>
        <p className="text-default">
          <a className="text-teal-600">{Alert}</a> {Title}
        </p>
        <Container>
          <OwlCarousel options={options}>
            {data.map(promotions => <Product product={promotions} />)}
          </OwlCarousel>
        </Container>
      </div>

      <Adverts banner={"banner4.png"} banner2={"banner5.png"} />

      <div>
        <p className="text-default">
          <a className="text-teal-600"> Lançamentos </a>
        </p>
        <Container>
          <OwlCarousel options={options}>
            {data.map(promotions => <Product product={promotions} />)}
          </OwlCarousel>
        </Container>
        <Container className="mt-5">
          <OwlCarousel options={options}>
            {data.map(promotions => <Product product={promotions} />)}
          </OwlCarousel>
        </Container>
      </div>
      {/* <Adverts banner={"banner6.png"} /> */}
    </>
  )
}

