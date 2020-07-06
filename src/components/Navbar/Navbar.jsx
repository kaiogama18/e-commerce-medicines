import { Breakpoint } from 'react-socks';
import Link from 'next/link';
import { Search } from '..';

import { Badge, Grid, Typography, Container, Divider, Button, AppBar, Toolbar, CardMedia, Paper, useScrollTrigger, Slide } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import PropTypes from 'prop-types';
import styles from "./Navbar.module.scss"

function ElevationScroll(props) {
  const { children, window } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  window: PropTypes.func,
};

function Navbar(props) {

  const data = {
    logo_src: '/img/logo-Wedo-mini.png',
    logo_name: 'WEDO MARKET',
    menu_hamburguer: 'menu',
    shopping_cart: 'shopping_basket',
    login_user: 'account_circle',
  };

  return (
    <>
      <div className={styles.navLogin}>
        <Container >
          <Grid container alignItems="center" spacing={3}>
            <Grid item xs>
              <Typography variant="overline"> BEM-VINDO, FAÇA SEU
                  <Link href="#"> LOGIN </Link>
                  OU
                  <Link href="#"> CADASTRE-SE </Link>
              </Typography>
            </Grid>
            <Grid container justify="center" item xs>
              <Typography variant="overline"> Vendas sujeitas à confirmação de dados </Typography>
            </Grid>
            <Grid container justify="flex-end" item xs>
              <div className="flex">
                <Button variant="overline"> MEUS PEDIDOS </Button>
                <Divider orientation="vertical" flexItem className={styles.divider} />
                <Button variant="overline"> MINHA CONTA </Button>
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
      <Breakpoint medium up>
        <ElevationScroll {...props}>
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
                    <Paper variant="outlined" className={styles.carItem}>
                      <Badge className="mr-5" badgeContent={1} color="primary">
                        <ShoppingBasketIcon />
                      </Badge>
                      <Typography variant="h6"> R$ 1,00 </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Container>
            </Toolbar>
          </AppBar>
        </ElevationScroll>
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

export default Navbar;
