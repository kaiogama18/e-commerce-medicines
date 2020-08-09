import { Layout, Breadcrumb } from "../components";
import { Container, CardMedia, Grid, Typography, Divider, Button, Icon, TextField, MenuItem } from "@material-ui/core";
import { useState, useEffect } from "react";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts ";
import Rota from "../Routes/Rota";
import { Rating } from "@material-ui/lab";



export default ({ id }) => {

  const route = '/produto/consulta';
  const refresh = 1
  const [currency, setCurrency] = useState(1);
  const [productt, setProduct] = useState([]);
  const [value, setValue] = useState(0);


  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  useEffect(() => {
    (async () => {
      const nameProduct = new URLSearchParams(location.search).get('name');
      const { data } = await Rota({ route, param: { "texto": nameProduct, "tipo": "des", "convenio": false } })
      setProduct(data)
      setCurrency(data.map(i => i.quantidade))
      setValue(Math.trunc(Math.cbrt(data.map(i => i.preco))) + 1)
    })();

  }, [refresh])


  function ProductBuy(props) {
    return <div className="mt-8">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={3}>
          <TextField
            select
            value={currency}
            onChange={handleChange}
            helperText="Informe a Quantidade">
            <MenuItem key={props.quantidade} value={props.quantidade}>
              {props.quantidade}
            </MenuItem>
          </TextField>
        </Grid>
        <Grid item xs={12} sm={9}>
          <Button variant="contained" size="large" color="primary"
            size="large"
            fullWidth={true}
            disableElevation={true}
            style={{ backgroundColor: "#38b2ac" }}
            startIcon={<Icon>shopping_basket</Icon>}>
            Comprar </Button>
        </Grid>
      </Grid>
    </div>
  }

  return productt.map(product =>
    <Layout>
      <Breadcrumb nameProduct={product.nome} links={[product.categoria, product.familia]} />
      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <CardMedia
              component="img"
              alt="{product.nome}"
              image="/img/no-photo.svg"
              title="{product.nome}"
            />
          </Grid>
          <Grid item xs={12} sm={6} >
            <Title title={product.nome} />
            <ProductSubtitle title={['Modelo: ' + product.familia.nome, 'Código de Barras: ' + product.ean]} />
            <Rating className="mt-1" size="small" value={value} readOnly />
            <ProductPrize preco={product.preco} precoMaior={product.precoMaior} />
            <ProductBuy quantidade={product.quantidade} />
          </Grid>
        </Grid>
      </Container>

      <Content title={titleDescription} description={[product.nome, product.descricao]} />
      <Content title={titleRecommendation} description={[recommendation, frete]} />
      {product.principioAtivo ?
        <Content title={activePrinciple} description={[product.principioAtivo]} />
        : null}
      <RelatedProducts idCategory={product.categoria.id} />
    </Layout>
  )
}

const titleDescription = 'descrição'
const activePrinciple = 'princípio Ativo'
const titleRecommendation = 'Exige retenção de receita médica no momento da entrega'
const recommendation = 'se persistirem os sintomas, o médico deverá ser consultado. é um medicamento. seu uso pode trazer riscos, procure um médico ou um farmacêutico. leia a bula.';
const frete = 'O prazo de entrega informado começa a contar a partir da data do envio, quando o status do seu pedido mudar para concluído e enviado.'

function Content(props) {
  return <Container className="mt-10">
    <Title title={props.title} />
    <div className="my-5">
      {props.description.map(text => Description(text))}
    </div>
  </Container>
}

function ProductSubtitle(props) {
  return <div className="mt-2">
    {props.title.map(text => <SubtitlePD title={text} />)}
  </div>
}


function ProductPrize(props) {
  return <div className="mt-8">
    <SubtitlePD title={'De R$' + props.precoMaior + ' Por: '} />
    <Typography variant="h4" style={{ fontWeight: 500 }}> R${props.preco} </Typography>
    <SubtitlePD title={'Você economiza: R$' + (props.precoMaior - props.preco).toFixed(2)} />
    <SubtitlePD title={'Até 0 + 4x de R$' + (props.preco / 4).toFixed(2)} />
  </div>
}

function Title(props) {
  return <><Typography className="text-blue-900 uppercase" variant="h6" style={{ fontWeight: 500 }} > {props.title} </Typography> <Divider /></>
}

function Description(props) {
  return <Typography variant="h6" style={{ textAlign: "justify", marginTop: 10 }} > {props} </Typography>
}

function SubtitlePD(props) {
  return <Typography variant="subtitle2" className="text-gray-600 capitalize"> {props.title}  </Typography>
}


