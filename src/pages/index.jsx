import Layout from "../components/layout";
import Search from "../components/search";
import Category from "../components/category";
import Banner from "../components/banner";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="py-5">
          <Search />
          <Category />
          <Banner />
        </div>
      </Layout>
    );
  }
}

export default Index;
