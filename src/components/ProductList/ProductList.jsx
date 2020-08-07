import { Container, Grid, Typography, Divider } from "@material-ui/core";
import { Adverts, Product } from "..";
import { useEffect, useState, Fragment } from "react"
import Rota from "../../Routes/Rota";

export default ({ idCategory, banners }) => {
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
                {productList.map(product => <Grid item xs={6} md={9} lg={3}><Product product={product} />  </Grid>)}
            </Grid>

            {
                banners ?
                    banners[1] ? <Adverts banner={banners[0].foto} banner2={banners[1].foto} /> : <Adverts banner={banners[0].foto} /> : null

            }

        </Container >
    )
}




