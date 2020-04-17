import data from '../data/card.json';

const price = 'R$:';
const btn = 'Saiba Mais';

function CardProduct(props) {
  return (
    <>
      {props.product.map((aux, index) => {
        return (
          <div class="card-product">
            <img src={aux.src} alt={aux.name} />

            <p class="text-base mb-2">
              {aux.name} <br />
              <a class="text-gray-700 font-bold text-xl">
                {price} {aux.price}
              </a>
            </p>
            <div class="px-6 py-4">
              <button className="btn-default">{btn}</button>
            </div>
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
