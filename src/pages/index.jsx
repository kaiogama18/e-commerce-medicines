import produto from '../data/card.json';
import { Categorys, Banner, Products, Layout } from '../components';
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
  const [categorys, setCategorys] = useState([]);
  const [bannes, setBannes] = useState([]);
  const [promotion, setPromotion] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const { data } = await Rota({ route, param: { id: "", idCategoria: "", numeroCartao: "" } })
      setCategorys(data.listaDeCategorias)
      setBannes(data.listaDeBanners)
      setPromotion(data.listaDeProdutos)
    }
    fetchAPI();
  }, route)

  return (
    <Layout>
      <Categorys categorys={categorys}  />
      <Banner bannes={bannes} />
      <Delivery />
      <Products promotion={promotion} />
    </Layout>
  );
}

export default Index;
