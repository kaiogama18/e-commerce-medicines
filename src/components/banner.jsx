import { Carousel } from 'react-responsive-carousel';
function ImgBanner(props) {
  return (
    <Carousel
      showArrows={true}
      dynamicHeight={true}
      showThumbs={false}
      autoPlay={true}
      infiniteLoop={true}
      showStatus={false}
      emulateTouch={true}
    >
      {props.img.map((aux) => {
        return <img src={aux.src} alt={aux.name} draggable="false" />;
      })}
    </Carousel>
  );
}

const Banner = () => {
  const data = [
    {
      id: '001',
      name: 'banner generico',
      src: '/products/banner1.jpg',
    },
    {
      id: '002',
      name: 'banner generico',
      src: '/products/banner2.jpg',
    },
  ];
  return (
    <div className="overflow-hidden">
      <ImgBanner img={data} />
    </div>
  );
};

export default Banner;
