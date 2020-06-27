import OwlCarousel from "react-owl-carousel2";
import { Container } from "@material-ui/core";
import { Adverts, Product } from "..";

const Title = 'MELHORES OFERTAS DO MÊS DE JUNHO';
const Alert = 'PRORROGADO!';

const options = {
  center: false,
  loop: false,
  margin: 10,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 4
    },
    1000: {
      items: 5
    }
  }
};

export default ({ promotions }) => {
  return (
    <>
      <p className="text-default">
        <a className="text-teal-600">{Alert}</a> {Title}
      </p>
      <Container>
        <OwlCarousel options={options}>
          {
            promotions.map(promotions => (
              <Product
                nome={promotions.nome}
                precoMaior={promotions.precoMaior}
                preco={promotions.preco} />
            ))
          }
        </OwlCarousel>
      </Container>
      <Adverts />
    </>
  )
}

