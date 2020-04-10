class Navbar extends React.Component {
  render() {
    const data = {
      logo_src: "/logo-Wedo-mini.png",
      logo_name: "WEDO MARKET",
      menu_hamburguer: "menu",
      shopping_cart: "shopping_basket",
    };

    return (
      <nav className="flex justify-between overflow-hidden h-16 bg-default shadow-xl px-6">
        <div className="flex items-center">
          <button className="material-icons bg-transparent text-white ounded-full h-10 w-10">
            {data.menu_hamburguer}
          </button>
        </div>
        <div className="flex  overflow-hidden items-center">
          <img className="w-32" src={data.logo_src} alt={data.logo_name} />
        </div>
        <div className="flex items-center">
          <button className="material-icons bg-transparent text-white ounded-full h-10 w-10">
            {data.shopping_cart}
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
