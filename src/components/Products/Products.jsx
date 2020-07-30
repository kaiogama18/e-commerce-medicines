import { Container, Grid } from "@material-ui/core";
import { Adverts, Product } from "..";
import data from '../../data/card.json';
const Title = 'para você';
const Alert = 'Cuidados diários';

const optionsP = {
  center: true,
  loop: true,
  margin: 10,
  responsive: {
    0: {
      items: 2
    },
    600: {
      items: 2
    },
    1000: {
      items: 5
    }
  }
};

export default ({ promotions }) => {
  return (
    <Container>
      <div>
        <p className="text-default">
          <a className="text-teal-600">{Alert}</a> {Title}
        </p>
        {/* <Container>
          <OwlCarousel options={optionsP}>
            {data.map(promotions => <Product product={promotions} />)}
          </OwlCarousel>
        </Container> */}

        <Grid container spacing={3} lg={12} sm={'auto'}>
          {data.map(promotions => <Grid item xs={3}><Product product={promotions} />  </Grid>)}
        </Grid>

      </div>

      <Adverts banner={"banner4.png"} banner2={"banner5.png"} />

      <div>
        <p className="text-default">
          <a className="text-teal-600"> Lançamentos </a>
        </p>

        <Grid container spacing={3} lg={12} sm={'auto'}>
          {data.map(promotions => <Grid item xs={3}><Product product={promotions} />  </Grid>)}
        </Grid>

      </div>
    </Container>
  )
}

