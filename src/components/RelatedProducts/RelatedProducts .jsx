import OwlCarousel from "react-owl-carousel2";
import { Container, Grid, Typography, Divider } from "@material-ui/core";
import { Adverts, Product } from "..";
import data from '../../data/card.json';
import Rota from "../../Routes/Rota";
import { useState, useEffect } from "react";

const options = {
    // center: true,
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

export default ({ idCategory }) => {
    const route = '/produto/oferta';
    const [productList, setProductList] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await Rota({ route, param: { "id": "", "idCategoria": idCategory, "numeroCartao": "" } })
            setProductList(data.listaDeProdutos)
        })();

    }, [idCategory])

    return (
        <Container className="mt-10">
            <Typography className="text-blue-900 uppercase" variant="h6" style={{ fontWeight: 500 }} > PRODUTOS RELACIONADOS </Typography> <Divider />

            <div className="mt-5">
                <OwlCarousel options={options}>
                    {productList.map(product => <Product product={product} />)}
                </OwlCarousel>
            </div>
        </Container>
    )
}

