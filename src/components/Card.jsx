import data from '../data/card.json';

const price = 'R$:';
const btn = 'COMPRAR';

function CardProduct(props) {
  return (
    <>
      {props.product.map((aux, index) => {
        return (
          <div className="card-product" key={index}>
            <button>
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
            </button>
            <button className="card-btn">{btn}</button>
          </div>
        );
      })}
    </>
  );
}

class Card extends React.Component {
  render() {
    return (
      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
        <CardProduct product={data} />
      </div>
    );
  }
}

export default Card;
