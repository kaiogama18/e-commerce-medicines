class Navbar extends React.Component {
  render() {
    return (
      <nav className="flex justify-between overflow-hidden h-16 bg-default px-6">
        <div className="flex items-center">
          <button className="material-icons bg-transparent text-white ounded-full h-10 w-10">
            menu
          </button>
        </div>
        <div className="flex  overflow-hidden items-center">
          <img className="w-32" src="/logo-Wedo-mini.png" alt="Logo Ambev" />
        </div>
        <div className="flex  items-center">
          <button className="material-icons bg-transparent text-white ounded-full h-10 w-10">
            shopping_basket
          </button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
