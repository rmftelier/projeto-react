import { Avatar, Box, Stack, Typography } from "@mui/material";
import { Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

const Intro = () => {
  return (
    <section>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "rgba(221, 89, 157, 0.17)",
          padding: "3rem",
          gap: "70px",
          borderBottom: "1px solid #000",
          paddingBottom: "3rem",
          paddingLeft: "2rem",
          paddingTop: "2rem",
          height: "640px"
        }}
      >

        <Stack sx={{ maxWidth: "95%" }}>
          <Typography variant="h1">Roberta Meyrelles</Typography>

          <Typography variant="h4">
            Capixaba, Bacharelanda em Ciência da Computação e
            Desenvolvedora Front-End.
          </Typography>

          <Typography
            sx={{
              '& a': {
                color: 'inherit',
                borderBottom: '2px solid transparent',
                transition: 'border-bottom 0.3s ease-in-out',
                '&:hover': {
                  borderBottom: '2px solid #000',
                },
              },
            }}
            variant="h4"
          >
            <Link component={RouterLink} to="/sobreMim">Sobre mim</Link> / <Link component={RouterLink} to="/sobrePretaLab">Sobre PretaLab</Link>
          </Typography>
        </Stack>
        <Avatar
          alt="Sua Foto"
          src="eu.jpeg"
          sx={{ width: 400, height: 430, marginRight: "1rem" }}
          variant="rounded"
        />
      </Box>
    </section>
  );
}


const PaginaInicial = () => {
  return (
    <Stack direction="row">
      <Box
        sx={{
          flex: 1,
          position: "relative",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Intro />

      </Box>
    </Stack>
  );
};

export default PaginaInicial;

