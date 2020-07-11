import { Grid, Typography, Container, Divider, Button, Box, Dialog, Slide, DialogTitle, DialogContent, DialogContentText, TextField, InputAdornment, IconButton, FormControl, InputLabel, FilledInput, DialogActions } from '@material-ui/core';
import styles from "./Login.module.scss"
import { useState } from 'react';
// import { Visibility, VisibilityOff } from 'material-ui-icons';
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default () => {

    const [open, setOpen] = useState(false);
    const [values, setValues] = useState({
        amount: "",
        password: "",
        weight: "",
        weightRange: "",
        showPassword: false
    });

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = prop => event => {
        setValues({ ...values, [prop]: event.target.value });
    };

    const handleClickShowPassword = () => {
        setValues({ ...values, showPassword: !values.showPassword });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box className={styles.navLogin}>
                <Container >
                    <Grid container alignItems="center" spacing={3}>
                        <Grid item xs>
                            <Typography variant="overline"> {data.welcome}
                                <a onClick={handleOpen}> {data.login} </a> {"OU"}
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

            <Dialog open={open}
                onClose={handleClose}
                TransitionComponent={Transition}>
                <DialogTitle>
                    {"Entre em sua Conta WEDO"}
                </DialogTitle>
                <DialogContent dividers>
                    <form >
                        <TextField
                            label="Insira seu E-mail ou CPF"
                            name="email"
                            margin="dense"
                            variant="filled"
                            className={styles.margin}
                            autoFocus
                            fullWidth
                        />

                        <FormControl
                            fullWidth
                            variant="filled"
                            className={styles.margin}>
                            <InputLabel htmlFor="filled-adornment-password">Insira sua senha</InputLabel>
                            <FilledInput
                                type={values.showPassword ? "text" : "password"}
                                value={values.password}
                                onChange={handleChange("password")}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>
                    </form>
                </DialogContent>

                <DialogActions>
                    <div className="w-full text-center">
                        <Button variant="contained" size="large" 
                            fullWidth={true}
                            disableElevation={true}>
                            {data.login}
                        </Button>

                        <Button color="secondary" className={styles.margin}>{"Esqueci minha senha"}</Button>
                    </div>
                </DialogActions>

            </Dialog>

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
