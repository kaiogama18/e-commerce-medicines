function CardProduct(props) {
  return props.product.map((aux) => {
    const btn = "Saiba Mais";
    return (
      <div key={aux.id} className="flex flex-col max-w-mdrounded overflow-hidden items-center text-center">
        <img className="w-32" src={aux.src} alt={aux.name} />
        <div className="py-4">
          <p className="text-sm font-bold mb-2"> {aux.name} </p>
          <p className="text-sm">
            {" "}
            <a className="text-xs font-bold">R$:</a>
            {aux.price}{" "}
          </p>
          <div className=" py-4">
            <button className="bg-teal-500 hover:bg-teal-700 text-sm text-white py-1 px-6 rounded">
              {btn}
            </button>
          </div>
        </div>
      </div>
    );
  });
}

class Card extends React.Component {
  render() {
    const data = [
      {
        id: "001",
        name: "Desodorante Colônia",
        src: "/img_card.jpg",
        price: "49,90",
      },
      {
        id: "002",
        name: "Desodorante Colônia",
        src: "/img_card.jpg",
        price: "49,90",
      },
      {
        id: "003",
        name: "Desodorante Colônia",
        src: "/img_card.jpg",
        price: "49,90",
      },
      {
        id: "004",
        name: "Desodorante Colônia",
        src: "/img_card.jpg",
        price: "49,90",
      },
    ];

    return (
      <div className="grid grid-cols-2 gap-4">
        <CardProduct product={data} />
      </div>
    );
  }
}

export default Card;
