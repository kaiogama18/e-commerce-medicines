import { Categories, Banner, Layout, WedoApp, ProductList, Product, Adverts } from '../components';
import { useState, useEffect } from 'react';
import Rota from '../Routes/Rota';
import { Container, Typography, Grid, Divider } from '@material-ui/core';
import Router from "next/router";
import data from '../data/index.json';

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


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await Rota({ route, param: { id: "", idCategoria: "", numeroCartao: "" } })
  //       if (data.ok) {
  //         setCategories(data.listaDeCategorias)
  //         setBannes(data.listaDeBanners)
  //         setPromotions(data.listaDeProdutos)
  //       } else {
  //         Router.push('/notfound');
  //       }
  //     } catch (error) {
  //       const { response } = error;
  //       Router.push('/notfound');
  //     }
  //   })();
  // }, route)

  //Para Demostração 
  useEffect(() => {
    // console.log('[Plot] ==> ' + JSON.stringify(data, null, 2));
    // console.log('[Plot] ==> ' + JSON.stringify(data.listaDeCategorias, null, 2));
    setCategories(data.listaDeCategorias)
    setBannes(data.listaDeBanners)
    setPromotions(data.listaDeProdutos)
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
        <div class="flex -mx-2">
          {promotions.map(product => <div class="w-1/5 px-2"><Product product={product} addItemCart={addItemCart} />  </div>)}
        </div>
        <Adverts banner={"banner3.jpg"} />
      </Container>

      <Container>
      <Title title="Ofertas especiais" />
        <div class="flex -mx-2">
          {promotions.map(product => <div class="w-1/5 px-2"><Product product={product} addItemCart={addItemCart} />  </div>)}
        </div>
        <Adverts banner={"banner4.png"} banner2={"banner5.png"} />
      </Container>

      <Container>
        <div className="mt-10">
        <Title title="Genéricos" />
        </div>
        <div class="flex -mx-2">
          {promotions.map(product => <div class="w-1/5 px-2"><Product product={product} addItemCart={addItemCart} />  </div>)}
        </div>
      </Container>

      {/* {categoryList.map(category =>
        <ProductList idCategory={category.id} banners={category.bannersList} addItemCart={addItemCart} />
      )} */}

      <WedoApp />
    </Layout>
  );
}

export default Index;

const promotionsTitle = 'Melhores ofertas e promoções';
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
