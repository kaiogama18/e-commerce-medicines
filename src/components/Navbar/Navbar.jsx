import { Breakpoint } from 'react-socks';
import Link from 'next/link';
import { Search } from '..';
import styles from "./Navbar.module.scss"
import { Badge, Grid, Typography, Container, Divider, Button, ButtonGroup, AppBar, Toolbar, CardMedia } from '@material-ui/core';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

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
                <Typography variant="overline"> Vendas sujeitas à análise e confirmação de dados </Typography>
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
        <Divider />
        <Breakpoint medium up>
          <AppBar className={styles.navbar} variant="outlined" position="static">
            <Toolbar>
              <Container>
                <Grid container alignItems="center" spacing={3}>
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
                  <Grid item container justify="flex-end" xs>
                    <div className={styles.carItem}>
                      <Badge className="mr-5" badgeContent={1} color="primary">
                        <ShoppingBasketIcon />
                      </Badge>
                      <Typography variant="h6" style={{ fontWeight: 500 }}> R$ 0,00 </Typography>
                    </div>
                  </Grid>

                </Grid>
              </Container>

            </Toolbar>

          </AppBar>

          {/* <nav>
            <div className="flex-center">
              <Link href="/">
                <img className={styles.imgLogo} src={data.logo_src} alt={data.logo_name} />
              </Link>
              <Search />
            </div>
            <div className="flex">
              <div className={styles.carItem}>
                <Badge className="mr-5" badgeContent={1} color="primary">
                  <ShoppingBasketIcon />
                </Badge>
                <Typography variant="h6" style={{ fontWeight: 500 }}> R$ 0,00 </Typography>
              </div>
            </div>
          </nav> */}

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
}

export default Navbar;
