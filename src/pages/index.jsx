import Layout from '../components/layout';
import Search from '../components/search';
import Category from '../components/Category';
import Banner from '../components/banner';
import Delivery from '../components/delivery';
import Card from '../components/Card';
import { Breakpoint } from 'react-socks';
import CardCategory from '../components/cardCategory';

const title = 'Prorrogado!';
const subtitle = ' Melhores Ofertas da Semana de Páscoa';

const cat = 'Mais Vendidos na ';
const ter = 'Quarentena';

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

        <p className="text-default text-center">
          <a className="text-teal-500">{title}</a> {subtitle}
        </p>

        <Card />

        <div className="max-w-screen-xl mx-auto">
          <img src="/products/banner3.jpg" />
        </div>

        <p className="text-default">
          <a className="text-teal-500">{cat}</a> {ter}
        </p>

        <CardCategory />
      </Layout>
    );
  }
}

export default Index;
