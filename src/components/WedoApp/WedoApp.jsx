import { Container, Grid, Typography, Box, Link } from "@material-ui/core"
import styles from "./WedoApp.module.scss"

export default () => {
  return (
    <Container className="mt-10">
      <Grid container xs="auto" spacing={3}>
        <Grid item xs>
          <img className="w-4/5" src={WedoApp.imgApp} />
        </Grid>
        <Grid item container alignItems="center" xs>
          <Box>
            <Typography variant="h5"> {WedoApp.subtitle1} </Typography>
            <Typography variant="h2" className={styles.title}> {WedoApp.title} </Typography>
            <Typography variant="h5"> {WedoApp.subtitle2}  </Typography>
            <Box className="mt-5">
              <Grid container xs="auto" spacing={3}>
                {WedoApp.store.map((img) => (
                  <Grid item>
                    <Link href={img.href}>
                      <img className="w-40" src={img.src} />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}


const WedoApp = {
  "subtitle1": 'Baixe nosso',
  "title": 'Aplicativo',
  "subtitle2": 'Comprar Seu Medicamento Ficou Mais Fácil',
  "imgApp": "/img/wedoapp/app.png",
  "store": [
    {
      src: "/img/wedoapp/Google-store.png",
      href: "https://play.google.com/store"
    },
    {
      src: "/img/wedoapp/Apple-store.png",
      href: "https://play.google.com/store"
    },
  ]
};
