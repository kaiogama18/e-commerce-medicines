import { Container, Grid, Typography, Divider, Button } from "@material-ui/core";
import { Adverts, Product } from "..";
import { useEffect, useState, Fragment } from "react"
import Rota from "../../Routes/Rota";

const Title = 'para você';
const Alert = 'Cuidados diários';

export default ({ idCategory, banners, addItemCart }) => {
    const route = '/produto/oferta';
    const [productList, setProductList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);
    useEffect(() => {
        (async () => {
            const { data } = await Rota({ route, param: { "id": "", "idCategoria": idCategory, "numeroCartao": "" } })
            setProductList(data.listaDeProdutos)
            setCategoryList(data.listaDeCategorias)

        })();

    }, [idCategory])
    return (
        < Container >

          

            <div className="my-5">
                {categoryList.map(category => <Typography variant="h6" className="uppercase">{category.nome} </Typography>
                )}
                <Divider />
            </div>

            <Grid container spacing={3} >
                {productList.map(product => <Grid item xs={6} md={9} lg={3}><Product product={product} addItemCart={addItemCart} />  </Grid>)}
            </Grid>

            {
                banners ?
                    banners[1] ? <Adverts banner={banners[0].foto} banner2={banners[1].foto} /> : <Adverts banner={banners[0].foto} /> : null

            }

        </Container >
    )
}




