const Footer = () => {
  return (
    <footer className="flex flex-col overflow-hidden items-center bg-default shadow-xl pt-6">
      <div className="flex flex-col rounded-md items-center text-center bg-white p-2">
        <p className="text-black font-bold">Nosso Aplicativo</p>
        <div className="flex pt-2">
          <img className="w-32 mr-2" src="/googleP.png" />
          <img className="w-32" src="/appleS.png" />
        </div>
      </div>
      <div className="flex justify-center items-center bg-black w-screen mt-3 p-1">
        <img className="w-4 h-4 mr-2" src="/what.png" />
        <img className="w-8 mr-2" src="/insta.png" />
        <img className="w-6 h-6 mr-2" src="/tw.png" />
      </div>
      <div className="text-center text-white mt-1">
        <p className="text-xs mb-1">
          <a className="uppercase">Wedo MArket @ 2020</a> - Todos direitos
          reservados
        </p>
      </div>
    </footer>
  );
};

export default Footer;
