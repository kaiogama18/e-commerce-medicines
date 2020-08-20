import { Categories, Banner, Layout, WedoApp, ProductList, Product, Adverts } from '../components';
import { useState, useEffect } from 'react';
import Rota from '../Routes/Rota';
import { Container, Typography, Grid, Divider } from '@material-ui/core';
import Router from "next/router";

function Delivery() {
  const delivery_title = 'Entrega somente para Manaus';
  const delivery_subtitle =
    'Pagamento à vista através de boleto bancário possui 2% de desconto';
  return (
    <section className="delivery">
      <p>
        <a className="font-bold">{delivery_title}</a>
        <br /> {delivery_subtitle}
      </p>
    </section>
  );
}

const Index = () => {
  const route = '/produto/oferta';
  const [categories, setCategories] = useState([]);
  const [bannes, setBannes] = useState([]);
  const [promotions, setPromotions] = useState([]);
  const [product, setProduct] = useState();


  useEffect(() => {
    (async () => {
      try {
        const { data } = await Rota({ route, param: { id: "", idCategoria: "", numeroCartao: "" } })
        if (data.ok) {
          setCategories(data.listaDeCategorias)
          setBannes(data.listaDeBanners)
          setPromotions(data.listaDeProdutos)
        } else {
          Router.push('/notfound');
        }
      } catch (error) {
        const { response } = error;
        Router.push('/notfound');
      }
    })();
  }, route)



  async function addItemCart(product) {
    // console.log(product)
  }
  return (
    <Layout>
      <Categories categories={categories} />
      <Banner bannes={bannes} />
      <Delivery />

      <Container>
        <Title title={promotionsTitle} />
        <Grid container spacing={3}>
          {promotions.map(product => <Grid item xs={6} md={9} lg={3}><Product product={product} addItemCart={addItemCart} />  </Grid>)}
        </Grid>
        <Adverts banner={"banner3.jpg"} />
      </Container>

      {categoryList.map(category =>
        <ProductList idCategory={category.id} banners={category.bannersList} addItemCart={addItemCart} />
      )}

      <WedoApp />
    </Layout>
  );
}

export default Index;

const promotionsTitle = 'Dia dos Pais com as melhores ofertas e promoções';
const categoryList = [
  {
    "id": 194,
    "bannersList": [
      { "foto": "banner4.png" },
      { "foto": "banner5.png" }
    ]
  },
  {
    "id": 221,
    "bannersList": [
      { "foto": "banner6.png" },
    ]
  },
  {
    "id": 205
  },
]


function Title(props) {
  return <div className="my-5"><Typography className="text-blue-900 uppercase" variant="h6" style={{ fontWeight: 500 }} > {props.title} </Typography> <Divider /></div>
}
