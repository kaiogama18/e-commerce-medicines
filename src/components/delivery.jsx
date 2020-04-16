const Delivery = () => {
  const data = {
    tile: 'Entrega somente para Manaus',
    subtitle:
      'Pagamento à vista através de boleto bancário possui 7% de desconto',
  };

  return (
    <section className="delivery">
      <p className="delivery-title">{data.tile}</p>
      <p className="delivery-subtitle"> {data.subtitle} </p>
    </section>
  );
};

export default Delivery;
