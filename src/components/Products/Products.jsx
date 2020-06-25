import data from '../../data/card.json';
import Link from 'next/link';
import Typography from '@material-ui/core/Typography';
import { Button } from '@material-ui/core';

const price = 'R$ ';
const por = 'De R$ ';
const btn = 'COMPRAR';

function Card(props) {
  return (
    <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-4">
      {props.products.map((product) => {
        return (
          <Link href="/details">
            <div className="card-product" key={product.id}>
              <div className="card-img">
                {/* <img src={product.foto} alt={product.nome} /> */}
                <img src="img/no-photo.svg" alt={product.nome} />
              </div>
              <div className="card-text">
                <p>
                  {product.nome} <br />
                </p>
                <Typography variant="subtitle1">
                  {por}{product.preco} por:
                </Typography>
                <a>
                  
                  {price} {product.preco}
                </a>
              </div>
              <Button variant="contained" size="large"
                fullWidth={true}
                disableElevation={true}
                color="primary">
                {btn}
              </Button>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

const Products = ({ promotion }) => {
  return (
    <>
      <p className="text-default">
        <a className="text-teal-600">PRORROGADO!</a> MELHORES OFERTAS DO
          MÊS DE JUNHO
        </p>
      <Card products={promotion} />
      <div className="max-w-screen-xl mx-auto mt-10">
        <img src="/products/banner3.jpg" />
      </div>
      <p className="text-default">
        MAIS VENDIDOS NA <a className="text-teal-600">QUARENTENA</a>
      </p>
      <Card products={data} />
    </>
  );
}

export default Products;
