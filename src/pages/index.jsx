import produto from '../data/card.json';
import { Categorys, Banner, Products, Layout } from '../components';

function Delivery() {
  const delivery_title = 'Entrega somente para Manaus';
  const delivery_subtitle =
    'Pagamento à vista através de boleto bancário possui 7% de desconto';
  return (
    <section className="delivery">
      <p>
        <a className="font-bold">{delivery_title}</a>
        <br /> {delivery_subtitle}
      </p>
    </section>
  );
}

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Categorys />
        <Banner />
        <Delivery />
        <Products data={produto} />
      </Layout>
    );
  }
}

export default Index;
