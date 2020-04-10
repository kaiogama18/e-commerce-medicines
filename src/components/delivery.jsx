const Delivery = () => {
  const data = {
    tile: "Entrega somente para Manaus",
    subtitle:
      "Pagamento à vista através de boleto bancário possui 7% de desconto",
  };

  return (
    <section className="flex flex-col p-3 overflow-hidden items-center text-center bg-default mb-5">
      <p className="mt-2 text-xs text-white font-bold uppercase">
        {" "}
        {data.tile}{" "}
      </p>
      <p className="mt-2 text-xs text-white uppercase"> {data.subtitle} </p>
    </section>
  );
};

export default Delivery;
