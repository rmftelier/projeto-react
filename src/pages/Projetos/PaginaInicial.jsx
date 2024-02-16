import { Box, Typography, Button, Grid } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { Container, SubTitulo } from "../../components";

const CardProjeto = ({ title, description, link }) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box
        sx={{
          p: 4,
          border: 2,
          borderColor: "#000",
          textAlign: "center",
          backgroundColor: "#d6aab6",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <Typography
          sx={{
            mb: 2,
            textAlign: "center",
            fontWeight: "800",
            fontSize: "1.5rem",
            fontFamily: "Lato"
          }}>
          {title}
        </Typography>
        <Typography
          sx={{
            mb: 2,
            color: "#000000",
            fontSize: "1.2rem"
          }}
          variant="main"
        >
          {description}
        </Typography>
        <Button variant="contained"
          sx={{
            backgroundColor: "rgba(160, 37, 101, 0.638)", color: "#000",
            fontSize: "1rem",
            fontWeight: "700",
            fontFamily: 'Lato, sans-serif',
            weight: "120px",
            '&:hover': {
              backgroundColor: "rgba(150, 93, 203, 0.803)"
            },
          }}
          size="medium"
          component={RouterLink}
          to={link}
        >
          Ver Projeto
        </Button>
      </Box>
    </Grid>
  );
};

const Projetos = () => {
  const projetos = [
    {
      titulo: "Lista de Pokémons",
      descricao: "Lista de Pokémons criada através do consumo da PokeAPI.",
      link: "/lista-pokemons",
    },
    {
      titulo: "Lista de Estudantes",
      descricao: "Uma lista de estudantes desenvolvida no PretaLab. Utilizamos LocalStorage, useEffect e useState.",
      link: "/lista-estudantes",
    },
    {
      titulo: "Consulta de CEP",
      descricao: "Consulta de CEP feita através do consumo da Brasil API.",
      link: "/consulta-cep",
    },
    {
      titulo: "Contador",
      descricao: "Contador simples que utiliza o hook UseState.",
      link: "/contador",
    },
  ];

  return (
    <Container
      boxProps={{
        borderTop: "1px solid #000",
        flexDirection: "column",
        padding: "60px"
      }}
      stackProps={{
        gap: "40px"
      }}
    >
      <SubTitulo>Projetos Desenvolvidos no PretaLab</SubTitulo>
      <Box sx={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        gap: "40px"
      }}>
        {projetos.map((projeto, index) => (
          <CardProjeto key={index} title={projeto.titulo} description={projeto.descricao} link={projeto.link} />
        ))}
      </Box>
    </Container>
  );
};

export default Projetos;


