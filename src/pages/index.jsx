import Layout from '../components/layout';
import Search from '../components/search';
import Category from '../components/category';
import Banner from '../components/banner';
import Delivery from '../components/delivery';
import Card from '../components/Card';
import { Breakpoint } from 'react-socks';
import CardCategory from '../components/cardCategory';

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
        <img className="max-w-screen-xl mx-auto" src="/products/banner3.jpg" />
        <CardCategory />
      </Layout>
    );
  }
}

export default Index;
