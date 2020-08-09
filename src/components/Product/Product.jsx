import Link from 'next/link';
import { Card, CardActionArea, CardMedia, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import styles from "./Product.module.scss"
import { useState } from 'react';
import { Skeleton, Rating } from '@material-ui/lab';

const btn = 'COMPRAR';

const backUrl = '/some/other/value'


export default ({ product }) => {
    const [value, setValue] = useState(Math.trunc(Math.cbrt(product.preco)) + 1);
    const backUrl = '/details'

    return (
        <Card variant="outlined" className="hover:shadow-lg ">
            <Link href={{ pathname: 'details', query: { name: product.nome } }}>
                <a>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt={product.nome}
                            image="/img/no-photo.svg"
                            // image={product.foto}
                            title={product.nome}
                        />
                    </CardActionArea>
                    <CardContent className={styles.cardContent}>
                        <div className={styles.cardTitle}>
                            <Typography gutterBottom variant="subtitle2" > {product.nome} </Typography>
                            <Rating size="small" value={value} readOnly />
                        </div>
                        <Typography className={styles.oldPrice} variant="subtitle2">De R$ {product.precoMaior} por</Typography>
                        <Typography className={styles.price} variant="h5" component="h2">R$ {product.preco}</Typography>
                    </CardContent>
                </a>
            </Link>
            <CardActions>
                <Button className={styles.button} variant="contained" size="large"
                    fullWidth={true}
                    disableElevation={true}>
                    {btn}
                </Button>
            </CardActions>
        </Card >

    )

}