function Categorys(props) {
  return props.category.map((aux) => {
    return (
      <button
        key={aux.id}
        className="flex flex-col mx-2 items-center justify-center"
      >
        <div className="flex w-16 h-16 rounded-full  border-2 border-teal-400 bg-white">
          <img src={aux.src} alt={aux.name} />
        </div>
        <p className="mt-2 text-sm uppercase">{aux.name}</p>
      </button>
    );
  });
}

const Category = () => {
  const data = [
    {
      id: "001",
      name: "Suplemento",
      src: "/suplementos.png",
    },
    {
      id: "002",
      name: "Vitaminas",
      src: "/suplementos.png",
    },
    {
      id: "003",
      name: "Hidratante",
      src: "/suplementos.png",
    },
    {
      id: "004",
      name: "Pediatria",
      src: "/suplementos.png",
    },
  ];
  return (
    <section className="flex overflow-hidden mb-5">
      <Categorys category={data} />
    </section>
  );
};
export default Category;
