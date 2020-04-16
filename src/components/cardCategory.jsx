import data from '../data/cardQ.json';

const price = 'R$:';
const btn = 'Saiba Mais';
const tile = 'Mais Vendidos na ';
const subtitle = 'Quarentena';

function CardProduct(props) {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-4">
      {props.product.map((aux, index) => {
        return (
          <div class="card">
            <img src={aux.src} alt={aux.name} />
            <p class="text-base mb-2">
              {aux.name} <br />
              <a class="text-gray-700 font-bold text-xl">
                {price} {aux.price}
              </a>
            </p>
            <div class="px-6 py-4">
              <button>{btn}</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

class CardCategory extends React.Component {
  render() {
    return (
      <div className="my-10">
        <p className="text-sign max-w-screen-xl mx-auto text-justify">
          {tile}
          <a className="text-teal-500">{subtitle}</a>
        </p>
        <CardProduct product={data} />
      </div>
    );
  }
}

export default CardCategory;
