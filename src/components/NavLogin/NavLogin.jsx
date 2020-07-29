import { Grid, Typography, Container, Divider, Button, Box, Dialog, Slide, DialogTitle, DialogContent, DialogContentText, TextField, InputAdornment, IconButton, FormControl, InputLabel, FilledInput, DialogActions } from '@material-ui/core';
import styles from "./NavLogin.module.scss"

export default () => {
    return (
        <>
            <Box className={styles.navLogin}>
                <Container >
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs>
                            <Typography variant="overline"> {data.welcome}
                                <a> {data.login} </a> {"OU"}
                                <a> {data.register} </a>
                            </Typography>
                        </Grid>
                        <Grid container justify="center" item xs>
                            <Typography variant="overline"> {data.warning} </Typography>
                        </Grid>
                        <Grid container justify="flex-end" item xs>
                            <Box className="flex">
                                <Button variant="overline"> {data.my_requests} </Button>
                                <Divider orientation="vertical" flexItem className={styles.divider} />
                                <Button variant="overline"> {data.my_account} </Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    )
}

const data = {
    welcome: 'BEM-VINDO, FAÇA SEU',
    login: 'ENTRAR',
    register: 'CADASTRE-SE',
    warning: 'Vendas sujeitas à confirmação de dados',
    my_requests: 'MEUS PEDIDOS',
    my_account: 'MINHA CONTA',
};
