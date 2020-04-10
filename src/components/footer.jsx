const Footer = () => {
  return (
    <footer className="flex flex-col overflow-hidden items-center bg-default shadow-xl pt-6">
      <div className="flex flex-col rounded-md items-center text-center bg-white p-2">
        <p className="text-black font-bold">{title}</p>
        <div className="flex pt-2">
          {mobile.map((aux) => {
            return (
              <img
                key={aux.id}
                className="w-32 h-12 mr-2"
                src={aux.src}
                alt={aux.alt}
              />
            );
          })}
        </div>
      </div>
      <div className="flex justify-center items-center bg-black w-screen mt-3 p-1">
        <img className="w-8 mr-2" src="/insta.png" />
        {img_social.map((aux) => {
          return (
            <img
              key={aux.id}
              className="w-4 h-4 mr-2"
              src={aux.src}
              alt={aux.alt}
            />
          );
        })}
      </div>
      <div className="text-center text-white mt-1">
        <p className="text-xs mb-1">{copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;

const title = "Nosso Aplicativo";
const copyright = "WEDO MARKET @ 2020 - Todos direitos reservados";
const mobile = [
  {
    id: "01",
    alt: "Google PLay",
    src: "/googleP.png",
  },
  {
    id: "02",
    alt: "Apple Store",
    src: "/appleS.png",
  },
];
const img_social = [
  {
    id: "01",
    alt: "whatsapp",
    src: "/what.png",
  },
  {
    id: "03",
    alt: "whatsapp",
    src: "/tw.png",
  },
];
