import { Layout, Breadcrumb } from "../components";
import { Container, CardMedia, Grid, Typography, Divider, Button, Icon, TextField, MenuItem } from "@material-ui/core";
import { useState } from "react";
import RelatedProducts from "../components/RelatedProducts/RelatedProducts ";

export default ({ id }) => {

  const [currency, setCurrency] = useState(1);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <Layout>
      <Breadcrumb />
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
          <Grid item xs={12} sm={6}>
            <Typography variant="h5" className="text-blue-900" style={{ fontWeight: 500 }}> Máscara De Proteção Respiratória </Typography>
            <Divider />
            <div className="text-gray-600 mt-2">
              <Typography variant="subtitle2"> Modelo: Pano  </Typography>
              <Typography variant="subtitle2"> Disponibilidade: Disponível em 2 dias úteis </Typography>
            </div>

            <div className="mt-8">
              <Typography className="text-gray-600" variant="subtitle2"> De R$78.00 Por: </Typography>
              <Typography variant="h3" style={{ fontWeight: 500 }}> R$59.95 </Typography>
              <Typography className="text-gray-600" variant="subtitle2"> ECONOMIZE  R$ 18,05 </Typography>
              <Typography className="text-gray-600" variant="subtitle2"> R$ 56,95 à vista com desconto Transferência Online </Typography>


            </div>
            <div className="mt-8">
              <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    id="standard-select-currency"
                    select
                    value={currency}
                    onChange={handleChange}
                    helperText="Informe a Quantidade"
                  >
                    {currencies.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.value}
                      </MenuItem>
                    ))}
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

          </Grid>
        </Grid>

      </Container>
      <Container className="mt-20">
        <Typography className="text-blue-900" variant="h5" style={{ fontWeight: 500 }} > DESCRIÇÃO </Typography>
        <Divider />
        <div className="my-5">
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 20 }} > Máscara De Proteção </Typography>
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 20 }} >Para sua segurança e proteção contra os riscos de contaminação, não efetuaremos trocas destas máscaras por motivos de tamanho. Por isso, verifique suas medidas e a modelagem que se encaixe no seu rosto. </Typography>
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 20 }} > As máscaras estão sendo produzidas e enviadas por LOTES para facilitar nosso controle e garantir que todos consigam comprar.  </Typography>
          <Typography variant="h5" style={{ textAlign: "justify" }} > O prazo de entrega informado começa a contar a partir da data do envio, quando o status do seu pedido mudar para concluído e enviado.  </Typography>
        </div>
      </Container>
      <Container className="mt-20">
        <Typography className="text-blue-900" variant="h5" style={{ fontWeight: 500 }} > CONTRA-INDICAÇÃO </Typography>
        <Divider />
        <div className="my-5">
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 20 }} > Hipersensibilidade aos componentes do algodão. Crianças menores que 1 ano.</Typography>
        </div>
      </Container>

      <Container className="mt-20">
        <Typography className="text-blue-900" variant="h5" style={{ fontWeight: 500 }} > INSTRUÇÕES DE LAVAGEM </Typography>
        <Divider />
        <div className="my-5">
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 10 }} >- A máscara deve ser lavada separadamente das outras roupas; </Typography>
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 10 }} >- Imagens meramente ilustrativas.  </Typography>
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 10 }} >- Pessoas com hipersensibilidade à substância não devem ingerir o produto.  </Typography>
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 10 }} >- Em caso de hipersensibilidade ao produto, recomenda-se descontinuar o uso e consultar o médico. </Typography>
          <Typography variant="h5" style={{ textAlign: "justify" }} >- Não use o medicamento com o prazo de validade vencido.  </Typography>
        </div>
      </Container>

      <Container className="mt-20">
        <Typography className="text-blue-900" variant="h5" style={{ fontWeight: 500 }} > BENEFÍCIOS </Typography>
        <Divider />
        <div className="my-5">
          <Typography variant="h5" style={{ textAlign: "justify", marginBottom: 20 }} > Além de eficiente, é um equipamento simples, que não exige grande complexidade na sua produção e pode ser um grande aliado no combate à propagação do coronavírus no Brasil, protegendo você e outras pessoas ao seu redor. </Typography>
        </div>
      </Container>
      <RelatedProducts />
    </Layout>
  )
}

const currencies = [
  {
    value: '1',
  },
  {
    value: '2',
  },
  {
    value: '3',
  },
  {
    value: '4',
  },
];