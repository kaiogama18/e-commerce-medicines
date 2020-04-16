import data from '../data/card.json';

const price = 'R$:';
const btn = 'Saiba Mais';
function CardProduct(props) {
  return props.product.map((aux, index) => {
    return (
      <div key={index} className="card">
        <img src={aux.src} alt={aux.name} />
        <div className="py-4">
          <p className="card-tilte"> {aux.name}</p>
          <a className="card-price">{price}</a>
          {aux.price}
          <div className="py-4">
            <button>{btn}</button>
          </div>
        </div>
      </div>
    );
  });
}

class Card extends React.Component {
  render() {
    const data1 = {
      tile: 'Prorrogado!',
      subtitle: ' Melhores Ofertas da Semana de Páscoa',
    };

    return (
      <div className="card-container">
        <p>
          <a className="text-teal-500">{data1.tile}</a> {data1.subtitle}
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
          <CardProduct product={data} />
        </div>
      </div>
    );
  }
}

export default Card;
