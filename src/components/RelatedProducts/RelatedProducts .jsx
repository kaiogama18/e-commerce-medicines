import OwlCarousel from "react-owl-carousel2";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
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
        <Container className="mt-20">
            <Typography variant="body2" style={{ fontWeight: 200 }}> Quem viu, viu também! </Typography>
            <Typography className="text-blue-900" variant="h5" style={{ fontWeight: 500 }} > PRODUTOS RELACIONADOS </Typography>
            <Divider />
            <div className="mt-5">
                <OwlCarousel options={options}>
                    {data.map(promotions => <Product product={promotions} />)}
                </OwlCarousel>
            </div>
        </Container>
    )
}

