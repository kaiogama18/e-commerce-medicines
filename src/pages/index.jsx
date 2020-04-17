import Layout from '../components/layout';
import Search from '../components/search';
import Category from '../components/Category';
import Banner from '../components/banner';
import Delivery from '../components/delivery';
import Card from '../components/Card';
import { Breakpoint } from 'react-socks';
import CardCategory from '../components/cardCategory';

const price = 'R$:';
const btn = 'Saiba Mais';
const tile = 'Prorrogado!';
const subtitle = ' Melhores Ofertas da Semana de Páscoa';

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <Breakpoint small down>
          <Search />
        </Breakpoint>
        <Category />
        <Banner />
        <Delivery />
        <Card />

        <div className="max-w-screen-xl mx-auto">
          <img src="/products/banner3.jpg" />
        </div>
        {/*

        <CardCategory /> */}
      </Layout>
    );
  }
}

export default Index;
