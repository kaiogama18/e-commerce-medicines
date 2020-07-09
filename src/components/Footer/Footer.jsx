import styles from "./Footer.module.scss"
import { Grid, Container, Typography, Avatar, Divider } from "@material-ui/core";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Divider/>
      <Container>
        <Grid container justify="center" xs="auto" spacing={3}>

          <Grid item xs>
            <Typography variant="h5" className={styles.footerTilte}> Institucional </Typography>
            <div className="mt-2 flex flex-col">
              {InstitucionalT.map((title) => (<a href="/"> {title.nome} </a>))}
            </div>
          </Grid>

          <Grid item xs>
            <Typography variant="h5" className={styles.footerTilte}> Contato </Typography>
            <div className="mt-2 flex flex-col">
              {Contato.map((title) => (<Typography variant="subtitle1" className={styles.describre} > {title.nome} </Typography>))}
            </div>
          </Grid>

          <Grid item xs>
            <Typography variant="h5" className={styles.footerTilte}> Pagamento </Typography>
            {Pagmaneto.map((aux) => (
              <>
                <Typography variant="subtitle1" className={styles.describre}> {aux.menssage} </Typography>
                <Grid container xs="auto" spacing={2}>
                  {aux.data.map((logo) => (
                    <Grid item>
                      <img src={logo.src} alt={logo.alt} />
                    </Grid>
                  ))}
                </Grid>
              </>
            ))}
          </Grid>

          <Grid item xs>
            <Typography variant="h5" className={styles.footerTilte}> Segurança </Typography>
            <div className="mt-2">
              <img className="w-24" src='/img/safety/medalha_ouro_otima.png' />
            </div>
          </Grid>
        </Grid>

      </Container>
      <div className="my-5 text-center">
        <Container>
          <Typography variant="h6" className={styles.describre}> Acompanhe-nos nas redes sociais </Typography>

          <div className="mt-1">
            <Grid container justify="center" xs="auto" spacing={3}>
              {Social.map((logo) => (
                <Grid item>
                  <img className={styles.social} src={logo.src} />
                </Grid>
              ))}
            </Grid>
          </div>
        </Container>
        <div className="mt-5">
          <Typography variant="subtitle2"> {copyright} </Typography>
        </div>
      </div>
    </footer>

  );
};

export default Footer;


const InstitucionalT = [
  {
    nome: 'Empresa'
  },
  {
    nome: 'Como comprar'
  },
  {
    nome: 'Seguranca'
  },
  {
    nome: 'Envio'
  },
  {
    nome: 'Pagamento'
  },
  {
    nome: 'Política de troca e devolução'
  },
  {
    nome: 'Contato'
  },
];


const Contato = [
  {
    nome: 'Atendimento de segunda a sexta - 08h às 18h sábado 08h às 12h'
  },
  {
    nome: '(52) 99888-9999'
  },
  {
    nome: 'emailcontato@gmail.com'
  },

];


const Pagmaneto = [
  {
    "menssage": 'À Vista',
    "data": [
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_bbrasil.png'
      },
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_boleto.png'
      },
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_bradesco.png'
      },
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_itau.png'
      },
    ]
  },
  {
    "menssage": 'A prazo',
    "data": [
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_dclub.png'
      },
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_visa.png'
      },
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_elo.png'
      },
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_american.png'
      },
      {
        alt: 'mastercard-logo',
        src: '/img/cash/pag_dclub.png'
      },
      {
        alt: 'hiper-logo',
        src: '/img/cash/pag_hiper.png'
      },
    ]
  }
];

const Social = [
  {
    src: '/img/social/facebook.svg'
  },
  {
    src: '/img/social/instagram.svg'
  },
  {
    src: '/img/social/youtube.svg'
  },

];

const copyright = 'Política de Privacidade e notas legais - © Copyright 2020 WEDO MARKET - Todos os direitos reservados.';