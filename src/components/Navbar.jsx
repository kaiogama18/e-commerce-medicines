import { Breakpoint } from 'react-socks';
import Search from './search';

class Navbar extends React.Component {
  render() {
    const data = {
      logo_src: '/logo-Wedo-mini.png',
      logo_name: 'WEDO MARKET',
      menu_hamburguer: 'menu',
      shopping_cart: 'shopping_basket',
      login_user: 'account_circle',
    };

    return (
      <>
        <Breakpoint medium up>
          <nav>
            <div className="flex-center">
              <img className="mr-10" src={data.logo_src} alt={data.logo_name} />
              <Search />
            </div>
            <div className="flex">
              <div className="flex items-center mr-5 loginn">
                <span class="material-icons text-4xl mr-3">
                  {data.login_user}
                </span>
                <p>
                  Faça o login <br /> ou registre-se
                </p>
              </div>
              <div className="btn-car">
                <button className="material-icons mr-3">
                  {data.shopping_cart}
                </button>
                <p>
                  0 Itens <br />
                  R$ 0,00
                </p>
              </div>
            </div>
          </nav>
        </Breakpoint>
        <Breakpoint small down>
          <nav>
            <div className="flex-center">
              <button className="material-icons">{data.menu_hamburguer}</button>
            </div>
            <div className="flex overflow-hidden items-center">
              <img src={data.logo_src} alt={data.logo_name} />
            </div>
            <div className="flex-center">
              <button className="material-icons">{data.shopping_cart}</button>
            </div>
          </nav>
        </Breakpoint>
      </>
    );
  }
}

export default Navbar;
