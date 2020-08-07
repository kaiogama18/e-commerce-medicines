import { Container, Grid, Typography, Divider } from "@material-ui/core";
import { Adverts, Product } from "..";



export default ({ products, title }) => {
    return (
        <Container>
            <div className="my-5">
                <Typography variant="h6" className="uppercase"> {title} </Typography>
                <Divider />
            </div>

            <Grid container spacing={3} >
                {products.map(product => <Grid item xs={6} md={9} lg={3}><Product product={product} />  </Grid>)}
            </Grid>

            <Adverts banner={"banner3.jpg"} />
        </Container>
    )
}

