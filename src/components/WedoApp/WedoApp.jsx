import { Container, Grid, Typography, Link } from "@material-ui/core"

// .title {
//   color: #38b2ac !important;
//   font-weight: bold !important;
// }

export default () => {

  const WedoApps = {
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


  return (
    <Container className="mt-10">
      <Grid container xs="auto" spacing={3}>
        <Grid item xs>
          <img className="w-4/5" src={WedoApps.imgApp} />
        </Grid>
        <Grid item container alignItems="center" xs>
          <div>
            <Typography variant="h5"> {WedoApps.subtitle1} </Typography>
            <Typography variant="h2" className="text-teal-500"> {WedoApps.title} </Typography>
            <Typography variant="h5"> {WedoApps.subtitle2}  </Typography>
            <div className="mt-5">
              <Grid container xs="auto" spacing={3}>
                {WedoApps.store.map((img) => (
                  <Grid item>
                    <Link href={img.href}>
                      <img className="w-40" src={img.src} />
                    </Link>
                  </Grid>
                ))}
              </Grid>
            </div>
          </div>
        </Grid>
      </Grid>
    </Container>
  )
}


