function ImgBanner(props) {
  return props.img.map((aux) => {
    return (
      <img
        key={aux.id}
        className="js-slide__img mx-2"
        src={aux.src}
        alt={aux.name}
        crossOrigin="anonymous"
        draggable="false"
      />
    );
  });
}

const Banner = () => {
  const data = [
    {
      id: "001",
      name: "banner generico",
      src: "/banner-generico.jpg",
    },
    {
      id: "002",
      name: "banner generico",
      src: "/banner-generico.jpg",
    },
  ];
  return (
    <section className="flex items-center justify-center overflow-hidden mb-5">
      <ImgBanner img={data} />
    </section>
  );
};

export default Banner;
