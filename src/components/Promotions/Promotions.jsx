import OwlCarousel from "react-owl-carousel2";
import { Container, Box } from "@material-ui/core";
import { Adverts, Product } from "..";

const Title = 'MELHORES OFERTAS DO MÊS DE JUNHO';
const Alert = 'PRORROGADO!';

const options = {
    center: true,
    loop: false,
    rtl: true,
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
        <Container>
            <p className="text-default">
                <a className="text-teal-600">{Alert}</a> {Title}
            </p>
            <Box>
                <OwlCarousel options={options}>
                    {promotions.map(promotions => <Product product={promotions} />)}
                </OwlCarousel>
            </Box>
            <Adverts banner={"banner3.jpg"} />
        </Container>
    )
}

