const Delivery = () => {
  const data = {
    tile: 'Entrega somente para Manaus',
    subtitle:
      'Pagamento à vista através de boleto bancário possui 7% de desconto',
  };

  return (
    <section className="delivery">
      <p>
        <a className="font-bold">{data.tile}</a>
        <br /> {data.subtitle}
      </p>
    </section>
  );
};

export default Delivery;
