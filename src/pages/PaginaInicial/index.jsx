import { Avatar, Box, Stack, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { Titulo, Biografia } from "../../components";
import { SobreMim } from "../Sobre";

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
          height: "640px"
        }}
      >
        <Stack sx={{ maxWidth: "95%" }}>
          <Titulo>Roberta Meyrelles</Titulo>
          <Biografia>
            Sou <strong>capixaba</strong>, Bacharelanda em Ciência da Computação e aspirante a desenvolvedora front-end.
            Atualmente, estou me dedicando aos estudos de {" "}
            <span style={{ textDecoration: "underline #b71b52" }}>front-end</span> e{" "}
            <span style={{ textDecoration: "underline #b71b52" }}>acessibilidade na web</span>.
          </Biografia>
          <Typography
            sx={{
              '& a': {
                color: 'inherit',
                textDecoration: 'none',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  left: 0,
                  bottom: -2,
                  width: '100%',
                  height: 2,
                  backgroundColor: 'rgba(221, 89, 157, 0)',
                  transition: 'background-color 0.3s ease-in-out',
                },
                '&:hover::after': {
                  backgroundColor: 'rgba(221, 89, 157, 0.5)',
                },
              },
            }}
            variant="h4"
          >
            <Link href="#sobreMim" >Sobre mim</Link> /
            <RouterLink to="/sobre/preta-lab"> Sobre PretaLab</RouterLink>
          </Typography>
        </Stack>
        <Avatar
          alt="Sua Foto"
          src="eu.jpeg"
          sx={{ width: 400, height: 430, marginRight: "1rem" }}
          variant="rounded"
        />
      </Box>
      <SobreMim id="sobreMim" />
    </section>
  );
}

export default Intro;
