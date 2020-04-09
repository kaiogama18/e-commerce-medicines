import Layout from "../components/layout";
import Search from "../components/search";

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <div className="p-5">
          <Search />
        </div>
      </Layout>
    );
  }
}

export default Index;
