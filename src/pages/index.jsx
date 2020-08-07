import { Categories, Banner, Products, Layout, WedoApp, Promotions, ProductList } from '../components';
import { useState, useEffect } from 'react';
import Rota from '../Routes/Rota';

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
  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await Rota({ route, param: { id: "", idCategoria: "", numeroCartao: "" } })
      setCategories(data.listaDeCategorias)
      setBannes(data.listaDeBanners)
      setPromotions(data.listaDeProdutos)
    }
    fetchAPI();
  }, route)

  return (
    <Layout>
      <Categories categories={categories} />
      <Banner bannes={bannes} />
      <Delivery />
      <Promotions products={promotions} title={promotionsTitle} />

      {categoryList.map(category =>
        <ProductList idCategory={category.id} banners={category.bannersList} />
      )}
      {/* <Products promotions={promotions} /> */}
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