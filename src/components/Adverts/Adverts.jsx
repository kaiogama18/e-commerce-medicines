import { Container, Grid } from "@material-ui/core"

export default ({ banner, banner2 }) => {
    return (
        <Container className="mt-10">
            <Grid container spacing={3}>
                {
                    !banner2 ?
                        <Grid item xs={12}>
                            <img src={"/img/products/" + banner} />
                        </Grid> :
                        <Container className="mt-10">
                            <Grid container spacing={3}>
                                <Grid item xs={12} sm={6}>
                                    <img src={"/img/products/" + banner} />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <img src={"/img/products/" + banner2} />
                                </Grid>
                            </Grid>
                        </Container>
                }
            </Grid>
        </Container>
    )
}

