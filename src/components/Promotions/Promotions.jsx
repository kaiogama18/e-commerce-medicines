import { Container, Grid } from "@material-ui/core";
import { Adverts, Product } from "..";

const Title = 'MELHORES OFERTAS DO MÊS DE JUNHO';
const Alert = 'PRORROGADO!';

export default ({ promotions }) => {
    return (
        <Container>
            <p className="text-default">
                <a className="text-teal-600">{Alert}</a> {Title}
            </p>

            <Grid container spacing={1} lg={5} sm={'auto'}>
                {promotions.map(promotions => <Grid item xs={6}><Product product={promotions} />  </Grid>)}
            </Grid>

            <Adverts banner={"banner3.jpg"} />
        </Container>
    )
}

