import Layout from "../components/layout";
import Search from "../components/search";
import Category from "../components/category";
import Banner from "../components/banner";
import Delivery from "../components/delivery";

class Index extends React.Component {
  render() {
    const data = {
      tile: "Prorrogado!",
      subtitle: " Melhores Ofertas da Semana",
    };

    return (
      <Layout>
        <div className="py-5">
          <Search />
          <Category />
          <Banner />
          <Delivery />
          <div className="mx-4">
            <p className="text-center">
              <a className="text-teal-500">{data.tile}</a> {data.subtitle}
            </p>
          </div>
        </div>
      </Layout>
    );
  }
}

export default Index;
