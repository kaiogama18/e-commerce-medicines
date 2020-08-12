import styles from "./NavCar.module.scss"
import { Badge, Typography, Button, Grid, Drawer, Divider } from "@material-ui/core"
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { useState } from "react";

{/* <Grid item xs className="bg-red-600 p-0"> */ }




export default () => {
    const [state, setState] = useState({
        right: false
    });
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({ ...state, [anchor]: open });
    };


    const list = (anchor) => (
        <div
            className={styles.drawer}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Title title={'Meu carrinho'} />


        </div>

    )

    return ["right"].map((anchor) => (
        <>
            <Grid xs >
                <Button className={styles.button}
                    onClick={toggleDrawer(anchor, true)}
                    variant="outlined"
                    color="primary"
                    size="large"
                    fullWidth={true}
                    startIcon={<Badge className="mr-1" badgeContent={0} color="primary">
                        <ShoppingBasketIcon />
                    </Badge>}
                    disableElevation>
                    R$ 0,00
            </Button>
            </Grid>
            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                {list(anchor)}
            </Drawer>
        </>
    ))



}




function Title(props) {
    return <><Typography className="text-blue-900 uppercase" variant="h6" style={{ fontWeight: 500 }} > {props.title} </Typography> <Divider /></>
  }