import Layout from "../components/layout";
import Search from "../components/search";
import Category from "../components/category";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="py-5">
          <Search />
          <Category />
        </div>
      </Layout>
    );
  }
}

export default Index;
