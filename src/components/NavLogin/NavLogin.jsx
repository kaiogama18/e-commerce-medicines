import { Grid, Typography, Container, Divider, Button } from '@material-ui/core';
import styles from "./NavLogin.module.scss"

export default () => {
    return (
        <div className={styles.navLogins}>
            <Container >
                <Grid container alignItems="center" spacing={3}>
                    <Grid item xs>
                        <Typography variant="subtitle2"> {data.welcome}
                            <a> {data.login} </a> {"ou"}
                            <a> {data.register} </a>
                        </Typography>
                    </Grid>
                    <Grid container justify="center" item xs>
                        <Typography variant="subtitle2"> {data.warning} </Typography>
                    </Grid>
                    <Grid container justify="flex-end" item xs>
                        <div className="flex">
                            <Button size="small" variant="text">
                                <Typography className="capitalize" variant="subtitle2">
                                    {data.my_requests}</Typography>
                            </Button>
                            <Divider orientation="vertical" className="mx-1" />
                            <Button size="small" variant="text">
                                <Typography className="capitalize" variant="subtitle2">{data.my_account}</Typography>
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

const data = {
    welcome: 'Bem-vindo, faça seu',
    login: 'login',
    register: 'cadastre-se',
    warning: 'Vendas sujeitas à confirmação de dados',
    my_requests: 'Meus Pedidos',
    my_account: 'Minha Conta',
};
