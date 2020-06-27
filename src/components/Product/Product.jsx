import Link from 'next/link';
import { Card, CardActionArea, CardMedia, makeStyles, CardContent, Typography, Button, CardActions } from '@material-ui/core';
import styles from "./Product.module.scss"

const btn = 'COMPRAR';

export default ({ product }) => {
    return (
        <Card variant="outlined" className={styles.root}>
            <CardActionArea>
                <Link href="/details">
                    <CardMedia
                        component="img"
                        alt={product.nome}
                        image="img/no-photo.svg"
                        title={product.nome}
                    />
                </Link>
            </CardActionArea>
            <CardContent className={styles.cardContent}>
                <div className={styles.cardTitle}>
                    <Typography gutterBottom variant="body1" component="h1"> {product.nome} </Typography>
                </div>
                <Typography className={styles.oldPrice} variant="subtitle2">De R$ {product.precoMaior} por: </Typography>
                <Typography className={styles.price} variant="h5" component="h2">R$ {product.preco}</Typography>
            </CardContent>
            <CardActions>
                <Button className={styles.button} variant="contained" size="large"
                    fullWidth={true}
                    disableElevation={true}>
                    {btn}
                </Button>
            </CardActions>
        </Card>

    )

}