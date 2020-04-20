import data from '../data/card.json';
import data1 from '../data/cardQ.json';
import { Redirect, Link } from 'react-router-dom';

const price = 'R$:';
const btn = 'COMPRAR';

function Click(props) {
  console.log(props);
}

function Card(props) {
  return (
    <>
      {props.product.map((aux, index) => {
        return (
          <div className="card-product" key={index}>
            {/* <button onClick={() => Click(aux.id)}> */}
            <div className="card-img">
              <img src={aux.src} alt={aux.name} />
            </div>
            <div className="card-text">
              <p>
                {aux.name} <br />
              </p>
              <a>
                {price} {aux.price}
              </a>
            </div>
            {/* </button> */}
            <button className="card-btn">{btn}</button>
          </div>
        );
      })}
    </>
  );
}

class Products extends React.Component {
  render() {
    return (
      <>
        <p className="text-default">
          <a className="text-teal-600">PRORROGADO!</a> MELHORES OFERTAS DA
          SEMANA DE PÁSCOA
        </p>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <Card product={data} />
        </div>
        <div className="max-w-screen-xl mx-auto mt-10">
          <img src="/products/banner3.jpg" />
        </div>
        <p className="text-default">
          MAIS VENDIDOS NA <a className="text-teal-600">QUARENTENA</a>
        </p>
        <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <Card product={data1} />
        </div>
      </>
    );
  }
}

export default Products;
