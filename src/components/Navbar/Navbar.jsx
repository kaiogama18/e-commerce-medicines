import { Breakpoint } from 'react-socks';
import Link from 'next/link';
import { Search } from '..';
import { Badge, Grid, Typography, Container, Divider, Button, AppBar, Toolbar, CardMedia, Paper, Tooltip, } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import styles from "./Navbar.module.scss"
import NavLogin from '../NavLogin/NavLogin';

export default () => {

  return (
    <>
      <Breakpoint medium up>
        <NavLogin />
        <AppBar className={styles.navbar} variant="outlined" position="static">
          <Toolbar>
            <Container>
              <Grid container justify="space-between" alignItems="center" spacing={3}>
                <Grid item xs>
                  <Link href="/">
                    <CardMedia
                      className={styles.imgLogo}
                      component="img"
                      alt={data.logo_name}
                      image={data.logo_src}
                      title={data.logo_name}
                    />
                  </Link>
                </Grid>
                <Grid item xs={8}>
                  <Search />
                </Grid>
                <Grid item xs>
                <Tooltip title="Ver Carrinho" aria-label="add">
                  <Paper variant="outlined" className={styles.carItem}>
                    <Badge className="mr-5" badgeContent={1} color="primary">
                      <ShoppingBasketIcon />
                    </Badge>
                    <Typography variant="h6"> R$ 1,00 </Typography>
                  </Paper>
                </Tooltip>

                </Grid>
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