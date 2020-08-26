import Link from 'next/link';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions, Grid } from '@material-ui/core';
import styles from "./Product.module.scss"
import { useState } from 'react';
import { Rating } from '@material-ui/lab';
const btn = 'COMPRAR';
const backUrl = '/some/other/value'
export default ({ product, addItemCart }) => {
    const [value, setValue] = useState(Math.trunc(Math.cbrt(product.preco)) + 1);
    const backUrl = '/details'

    return (
        <Card variant="outlined" className="hover:shadow-lg ">
            <Link href={{ pathname: 'details', query: { name: product.nome } }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={product.nome}
                        // image="/img/no-photo.svg"
                        image={product.foto}
                        title={product.nome}
                    />
                    <CardContent className={styles.cardContent}>

                        <div className={styles.cardTitle}>
                            <Typography gutterBottom variant="subtitle1" > {product.nome} </Typography>
                        </div>

                        <Grid container wrap="nowrap" spacing={1} alignItems="center" justify="center">
                            <Grid item xs>
                                <Typography noWrap className={styles.oldPrice} variant="subtitle2">De R$ {product.precoMaior} por </Typography>
                            </Grid>
                            <Grid item xs>
                                <Typography className={styles.price} variant="h6">R$ {product.preco}</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="subtitle2">ou 2x de {(product.preco)/2} sem juros</Typography>


                        <Grid container wrap="nowrap" alignItems="center" justify="center">
                            <Grid item xs>
                                <Rating size="small" value={value} readOnly />
                            </Grid>
                            <Grid item xs>
                                <Typography noWrap className="text-gray-600" variant="subtitle2" component="h2">({product.quantidade})</Typography>
                            </Grid>
                        </Grid>






                    </CardContent>
                </CardActionArea>
            </Link>
            <CardActions>
                {
                    product.quantidade != 0 ? <Button onClick={() => addItemCart(product)}
                        className={styles.button}
                        variant="contained"
                        size="large"
                        fullWidth={true}
                        disableElevation={true}>
                        {btn}
                    </Button> : <Button variant="contained" size="large"
                        fullWidth={true}
                        disableElevation={true}
                        disabled>
                            {unavailable}
                        </Button>
                }
            </CardActions>
        </Card >

    )

}

const unavailable = 'Produto indisponível'