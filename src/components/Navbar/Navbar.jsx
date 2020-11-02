import { Breakpoint } from 'react-socks';
import Link from 'next/link';
import { Search } from '..';
import { Badge, Grid, Container, AppBar, Toolbar, CardMedia, Paper, Tooltip, } from '@material-ui/core';

import styles from "./Navbar.module.scss"
import NavLogin from '../NavLogin/NavLogin';
import NavCar from '../NavCar/NavCar';


// export default function () {
  
//   useEffect(function mount() {

//     function onScroll() {
//       console.log("scroll!");
//     }

//     window.addEventListener("scroll", onScroll);

//     return function unMount() {
//       window.removeEventListener("scroll", onScroll);
//     };
//   });

//   return null;
// }


export default () => {

  return (
    <>
      <Breakpoint medium up>
        <NavLogin />
        <AppBar className={styles.navbar} variant="outlined" position="static">
          <Toolbar>
            <Container>
              <Grid container justify="space-between" alignItems="center" spacing={3}>
                <Grid xs >
                  <Link href="/" >
                    <CardMedia
                      className={styles.imgLogo}
                      component="img"
                      alt={data.logo_name}
                      image={data.logo_src}
                      title={data.logo_name}
                    />
                  </Link>
                </Grid>
                <Grid item xs={8} className="mr-4">
                  <Search />
                </Grid>
                <NavCar />
              </Grid>
            </Container>
          </Toolbar>
        </AppBar>
      </Breakpoint>

      <Breakpoint small down>
        <nav>
          <div className="flex-center">
            <button className="material-icons">{data.menu_hamburguer}</button>
          </div>
          <div className="flex overflow-hidden items-center">
            <Link href="/">
              <img src={data.logo_src} alt={data.logo_name} />
            </Link>
          </div>
          <div className="flex-center">
            <button className="material-icons ">{data.shopping_cart}</button>
          </div>
        </nav>
      </Breakpoint>
    </>
  );
}

const data = {
  logo_src: '/img/logo-Wedo-mini.png',
  logo_name: 'WEDO MARKET',
  menu_hamburguer: 'menu',
  shopping_cart: 'shopping_basket',
  login_user: 'account_circle',
};